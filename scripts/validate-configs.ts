#!/usr/bin/env tsx

import fs from "fs";
import path from "path";
import type {
  ControllerConfig,
  AppleAppSiteAssociation,
} from "../src/index.js";

interface ValidationError {
  file: string;
  line: number;
  column?: number;
  message: string;
  type: "error" | "warning";
}

interface ConfigTheme {
  cover?: string | { light?: string; dark?: string };
  icon?: string;
  [key: string]: any;
}

interface ConfigMethod {
  entrypoint: string;
  description?: string;
  [key: string]: any;
}

interface ConfigContract {
  methods?: ConfigMethod[];
  [key: string]: any;
}

// Use the main ControllerConfig type but extend it for validation purposes
type Config = ControllerConfig & {
  theme?: ConfigTheme;
  [key: string]: any;
};

const errors: ValidationError[] = [];

function findLineNumber(
  content: string,
  searchString: string,
  occurrence: number = 1
): number {
  const lines = content.split("\n");
  let found = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchString)) {
      found++;
      if (found === occurrence) {
        return i + 1; // Line numbers are 1-based
      }
    }
  }

  return 1; // Default to line 1 if not found
}

function validateAssets(
  configPath: string,
  config: Config,
  rawContent: string
): void {
  const configDir = path.dirname(configPath);

  if (config.theme) {
    // Check cover image(s)
    if (config.theme.cover) {
      if (typeof config.theme.cover === "string") {
        // Simple string cover
        const coverPath = path.join(configDir, config.theme.cover);
        if (!fs.existsSync(coverPath)) {
          const line = findLineNumber(rawContent, `"cover":`);
          errors.push({
            file: configPath,
            line,
            message: `Asset not found: ${config.theme.cover}`,
            type: "error",
          });
        }
      } else {
        // Object with light/dark covers
        if (config.theme.cover.light) {
          const lightCoverPath = path.join(configDir, config.theme.cover.light);
          if (!fs.existsSync(lightCoverPath)) {
            const line = findLineNumber(rawContent, `"light":`);
            errors.push({
              file: configPath,
              line,
              message: `Asset not found: ${config.theme.cover.light}`,
              type: "error",
            });
          }
        }

        if (config.theme.cover.dark) {
          const darkCoverPath = path.join(configDir, config.theme.cover.dark);
          if (!fs.existsSync(darkCoverPath)) {
            const line = findLineNumber(rawContent, `"dark":`);
            errors.push({
              file: configPath,
              line,
              message: `Asset not found: ${config.theme.cover.dark}`,
              type: "error",
            });
          }
        }
      }
    }

    // Check icon image
    if (config.theme.icon) {
      const iconPath = path.join(configDir, config.theme.icon);
      if (!fs.existsSync(iconPath)) {
        const line = findLineNumber(rawContent, `"icon":`);
        errors.push({
          file: configPath,
          line,
          message: `Asset not found: ${config.theme.icon}`,
          type: "error",
        });
      }
    }
  }
}

function checkApproveEntrypoints(
  configPath: string,
  config: Config,
  rawContent: string
): void {
  if (!config.chains) return;

  let approveOccurrence = 0;

  for (const [chainId, chain] of Object.entries(config.chains)) {
    if (!chain.policies?.contracts) continue;

    for (const [contractAddress, contract] of Object.entries(
      chain.policies.contracts
    )) {
      if (!contract.methods) continue;

      for (const method of contract.methods) {
        if (method.entrypoint === "approve") {
          approveOccurrence++;
          const searchString = `"approve"`;
          const line = findLineNumber(
            rawContent,
            searchString,
            approveOccurrence
          );

          errors.push({
            file: configPath,
            line,
            message: `Usage of 'approve' entrypoint detected in chain ${chainId}, contract ${contractAddress}`,
            type: "warning",
          });
        }
      }
    }
  }
}

function validateOrigins(
  configPath: string,
  config: Config,
  rawContent: string
): void {
  if (!config.origin) return;

  // Define protocol patterns to detect
  const protocolPattern = /^(https?|ftp|ws|wss):\/\//i;

  // Helper function to validate a single origin string
  const validateSingleOrigin = (
    origin: string,
    occurrence: number = 1
  ): void => {
    // Skip wildcard origins (used for development)
    if (origin === "*") return;

    if (protocolPattern.test(origin)) {
      // Extract the domain from the full URL
      const domainMatch = origin.match(/^https?:\/\/([^\/]+)/i);
      const suggestedOrigin = domainMatch
        ? domainMatch[1]
        : origin.replace(protocolPattern, "");

      const line = findLineNumber(rawContent, `"${origin}"`, occurrence);
      errors.push({
        file: configPath,
        line,
        message: `Origin should not contain protocol. Found: "${origin}", should be: "${suggestedOrigin}"`,
        type: "error",
      });
    }
  };

  // Handle both string and array formats
  if (typeof config.origin === "string") {
    validateSingleOrigin(config.origin);
  } else if (Array.isArray(config.origin)) {
    config.origin.forEach((origin, index) => {
      if (typeof origin === "string") {
        validateSingleOrigin(origin, index + 1);
      }
    });
  }
}

function validateAppleAppSiteAssociation(
  configPath: string,
  config: Config,
  rawContent: string
): void {
  if (!config["apple-app-site-association"]) return;

  const aasa: AppleAppSiteAssociation = config["apple-app-site-association"];

  if (!aasa.webcredentials) {
    const line = findLineNumber(rawContent, `"apple-app-site-association":`);
    errors.push({
      file: configPath,
      line,
      message: `Missing 'webcredentials' section in apple-app-site-association`,
      type: "error",
    });
    return;
  }

  if (!aasa.webcredentials.apps || !Array.isArray(aasa.webcredentials.apps)) {
    const line = findLineNumber(rawContent, `"webcredentials":`);
    errors.push({
      file: configPath,
      line,
      message: `Missing or invalid 'apps' array in webcredentials section`,
      type: "error",
    });
    return;
  }

  for (let i = 0; i < aasa.webcredentials.apps.length; i++) {
    const appId = aasa.webcredentials.apps[i];

    if (typeof appId !== "string") {
      const line = findLineNumber(rawContent, `"apps":`);
      errors.push({
        file: configPath,
        line,
        message: `App ID must be a string: ${appId}`,
        type: "error",
      });
      continue;
    }

    // Validate app ID format: should be TEAMID.BUNDLEID
    const appIdPattern = /^[A-Z0-9]{10}\.[a-zA-Z0-9.-]+$/;
    if (!appIdPattern.test(appId)) {
      const line = findLineNumber(rawContent, `"apps":`);
      errors.push({
        file: configPath,
        line,
        message: `Invalid app ID format: ${appId}. Expected format: TEAMID.BUNDLEID (e.g., ABCDE12345.com.example.app)`,
        type: "error",
      });
    }

    // Check for team ID length (should be 10 characters)
    const teamId = appId.split(".")[0];
    if (teamId.length !== 10) {
      const line = findLineNumber(rawContent, `"apps":`);
      errors.push({
        file: configPath,
        line,
        message: `Invalid team ID in app ID: ${appId}. Team ID should be exactly 10 characters`,
        type: "error",
      });
    }
  }
}

function validateConfigFile(configPath: string): void {
  try {
    const rawContent = fs.readFileSync(configPath, "utf-8");
    const config: Config = JSON.parse(rawContent);

    validateAssets(configPath, config, rawContent);
    validateOrigins(configPath, config, rawContent);
    checkApproveEntrypoints(configPath, config, rawContent);
    validateAppleAppSiteAssociation(configPath, config, rawContent);
  } catch (error) {
    errors.push({
      file: configPath,
      line: 1,
      message: `Failed to parse config file: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      type: "error",
    });
  }
}

function getAllConfigFiles(dir: string): string[] {
  const configFiles: string[] = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const configPath = path.join(fullPath, "config.json");
      if (fs.existsSync(configPath)) {
        configFiles.push(configPath);
      }
    }
  }

  return configFiles;
}

function formatAsGitHubAnnotation(error: ValidationError): string {
  const level = error.type === "error" ? "error" : "warning";
  // Make path relative to repository root for GitHub annotations
  const relativePath = path.relative(process.cwd(), error.file);
  return `::${level} file=${relativePath},line=${error.line}::${error.message}`;
}

function getFilesToValidate(): string[] {
  // Check for files from command line arguments
  const args = process.argv.slice(2);
  if (args.length > 0 && args[0] !== "--") {
    // Files passed as arguments (comma-separated)
    return args[0].split(",").filter((file) => file.endsWith("config.json"));
  }

  // Check for files from environment variable
  if (process.env.CHANGED_FILES) {
    return process.env.CHANGED_FILES.split(",").filter((file) =>
      file.endsWith("config.json")
    );
  }

  // Default: validate all config files
  const configsDir = path.join(process.cwd(), "configs");
  if (!fs.existsSync(configsDir)) {
    console.error("::error::Configs directory not found");
    process.exit(1);
  }

  return getAllConfigFiles(configsDir);
}

function main(): void {
  const configFiles = getFilesToValidate();

  if (configFiles.length === 0) {
    console.log("No config files to validate");
    return;
  }

  console.log(
    `Validating ${configFiles.length} config file${
      configFiles.length > 1 ? "s" : ""
    }:`
  );
  configFiles.forEach((file) =>
    console.log(`  - ${path.relative(process.cwd(), file)}`)
  );

  for (const configFile of configFiles) {
    // Ensure the file exists before validating
    if (!fs.existsSync(configFile)) {
      console.warn(`Warning: File not found: ${configFile}`);
      continue;
    }
    validateConfigFile(configFile);
  }

  // Output results
  if (errors.length === 0) {
    console.log("✅ All validated config files are valid");
  } else {
    console.log(
      `\nFound ${errors.length} issue${errors.length > 1 ? "s" : ""}:`
    );

    // Output GitHub annotations for workflow
    if (process.env.GITHUB_ACTIONS) {
      for (const error of errors) {
        console.log(formatAsGitHubAnnotation(error));
      }
    } else {
      // Output human-readable format for local testing
      for (const error of errors) {
        console.log(
          `${error.type.toUpperCase()}: ${error.file}:${error.line} - ${
            error.message
          }`
        );
      }
    }

    // Exit with error code if there are any errors (not warnings)
    const hasErrors = errors.some((e) => e.type === "error");
    if (hasErrors) {
      process.exit(1);
    }
  }
}

// Run the validation
main();
