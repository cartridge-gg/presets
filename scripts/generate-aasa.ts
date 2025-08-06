#!/usr/bin/env tsx

import fs from "fs";
import path from "path";
import type { ControllerConfig, AppleAppSiteAssociation } from "../src/index.js";

type Config = ControllerConfig;

function getAllConfigFiles(dir: string): string[] {
  const configFiles: string[] = [];

  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return configFiles;
  }

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

function extractAppIds(configPath: string): string[] {
  try {
    const configContent = fs.readFileSync(configPath, "utf-8");
    const config: Config = JSON.parse(configContent);

    if (!config["apple-app-site-association"]?.webcredentials?.apps) {
      return [];
    }

    return config["apple-app-site-association"].webcredentials.apps;
  } catch (error) {
    console.warn(
      `Failed to parse config file ${configPath}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
    return [];
  }
}

function generateAppleAppSiteAssociation(): AppleAppSiteAssociation {
  const configsDir = path.join(process.cwd(), "configs");
  const configFiles = getAllConfigFiles(configsDir);

  const allAppIds: string[] = [];

  // Always include Cartridge marketplace app IDs
  const requiredAppIds = [
    "FAKETEAMID.com.cartridge.marketplace",
    "F9U4Y5YSTN.com.cartridge.marketplace"
  ];

  allAppIds.push(...requiredAppIds);
  console.log(`Always including Cartridge marketplace app IDs: ${requiredAppIds.join(", ")}`);

  console.log(`Processing ${configFiles.length} config files...`);

  for (const configFile of configFiles) {
    const appIds = extractAppIds(configFile);
    if (appIds.length > 0) {
      const gameName = path.basename(path.dirname(configFile));
      console.log(`  - ${gameName}: ${appIds.join(", ")}`);
      allAppIds.push(...appIds);
    }
  }

  // Remove duplicates and sort
  const uniqueAppIds = [...new Set(allAppIds)].sort();

  console.log(`\nFound ${uniqueAppIds.length} unique app IDs (including required Cartridge marketplace app IDs)`);

  return {
    webcredentials: {
      apps: uniqueAppIds,
    },
  };
}

function validateFileSize(content: string): boolean {
  const sizeInBytes = Buffer.byteLength(content, "utf8");
  const sizeInKB = sizeInBytes / 1024;

  console.log(`Generated file size: ${sizeInKB.toFixed(2)} KB`);

  if (sizeInKB > 128) {
    console.error(
      `❌ File size exceeds 128 KB limit (${sizeInKB.toFixed(2)} KB)`
    );
    return false;
  }

  console.log("✅ File size is within 128 KB limit");
  return true;
}

function main(): void {
  try {
    console.log("Generating Apple App Site Association file...\n");

    const aasa = generateAppleAppSiteAssociation();
    const content = JSON.stringify(aasa, null, 2);

    // Validate file size
    if (!validateFileSize(content)) {
      process.exit(1);
    }

    // Ensure output directory exists
    const outputDir = path.join(process.cwd(), "built-configs");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the file (no extension as per Apple requirements)
    const outputPath = path.join(outputDir, "apple-app-site-association");
    fs.writeFileSync(outputPath, content);

    console.log(`\n✅ Successfully generated: ${outputPath}`);
    console.log(`📱 Total app IDs: ${aasa.webcredentials.apps.length}`);

    if (aasa.webcredentials.apps.length === 0) {
      console.log("⚠️  No app IDs found in any config files");
    }
  } catch (error) {
    console.error(
      "❌ Failed to generate Apple App Site Association file:",
      error
    );
    process.exit(1);
  }
}

// Run the script
main();
