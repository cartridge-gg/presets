import fs from "fs";
import path from "path";

const whitelabelPath = path.join(process.cwd(), "configs");
const outputPath = path.join(
  process.cwd(),
  "src/generated/controller-configs.ts"
);

// Available image sizes for optimization
const ICON_SIZES = [16, 32, 64, 128, 256];
const COVER_SIZES = [768, 1024, 1440];

function loadConfigFromJson(gamePath: string): any {
  try {
    const configPath = path.join(whitelabelPath, gamePath, "config.json");
    const configContent = fs.readFileSync(configPath, "utf-8");
    const config = JSON.parse(configContent);

    // Add CDN URLs for theme assets
    if (config.theme) {
      if (config.theme.cover) {
        if (typeof config.theme.cover === "object") {
          // Handle light/dark cover variants
          const lightCover = config.theme.cover.light;
          const darkCover = config.theme.cover.dark;

          config.theme.cover = {
            light: `https://static.cartridge.gg/presets/${gamePath}/${lightCover}`,
            dark: `https://static.cartridge.gg/presets/${gamePath}/${darkCover}`,
          };

          // Add optimized versions
          config.theme.optimizedCover = {
            light: generateOptimizedImageUrls(gamePath, lightCover, "cover"),
            dark: generateOptimizedImageUrls(gamePath, darkCover, "cover"),
          };
        } else {
          const coverFile = config.theme.cover;
          config.theme.cover = `https://static.cartridge.gg/presets/${gamePath}/${coverFile}`;

          // Add optimized versions
          config.theme.optimizedCover = generateOptimizedImageUrls(
            gamePath,
            coverFile,
            "cover"
          );
        }
      }
      if (config.theme.icon) {
        const iconFile = config.theme.icon;
        config.theme.icon = `https://static.cartridge.gg/presets/${gamePath}/${iconFile}`;

        // Add optimized versions
        config.theme.optimizedIcon = generateOptimizedImageUrls(
          gamePath,
          iconFile,
          "icon"
        );
      }
    }

    return config;
  } catch (error) {
    console.warn(`Failed to load config for ${gamePath}:`, error);
    return null;
  }
}

/**
 * Generates URLs for optimized images
 * @param gamePath - The game/project path
 * @param originalImage - Original image filename
 * @param type - Either 'icon' or 'cover'
 * @returns Object with optimized image URLs
 */
function generateOptimizedImageUrls(
  gamePath: string,
  originalImage: string,
  type: "icon" | "cover"
) {
  const result: Record<string, Record<string, string>> = {
    webp: {},
    [type === "icon" ? "png" : "jpg"]: {},
  };

  // Add original format too
  const originalExt = path.extname(originalImage);
  const originalFormat = originalExt.substring(1); // Remove the dot
  if (!result[originalFormat]) {
    result[originalFormat] = {};
  }

  const baseName = path.parse(originalImage).name;
  const sizes = type === "icon" ? ICON_SIZES : COVER_SIZES;

  for (const size of sizes) {
    // WebP versions
    result.webp[
      size
    ] = `https://static.cartridge.gg/presets/${gamePath}/${baseName}@${size}.webp`;

    // Original format version
    result[originalFormat][
      size
    ] = `https://static.cartridge.gg/presets/${gamePath}/${baseName}@${size}${originalExt}`;

    // PNG or JPG versions (if different from original)
    const altFormat = type === "icon" ? "png" : "jpg";
    if (altFormat !== originalFormat) {
      result[altFormat][
        size
      ] = `https://static.cartridge.gg/presets/${gamePath}/${baseName}@${size}.${altFormat}`;
    }
  }

  return result;
}

function generateConfigs() {
  const configs: Record<string, any> = {};

  try {
    const directories = fs
      .readdirSync(whitelabelPath)
      .filter((dir) =>
        fs.statSync(path.join(whitelabelPath, dir)).isDirectory()
      )
      .sort();

    for (const dir of directories) {
      const config = loadConfigFromJson(dir);
      if (config) {
        configs[dir] = config;
      }
    }

    // Ensure the output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate the TypeScript file
    const fileContent = `// This file is auto-generated. DO NOT EDIT IT MANUALLY.
import { ControllerConfigs } from "../";

export const configs: ControllerConfigs = ${JSON.stringify(configs, null, 2)};
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log("Successfully generated configs at:", outputPath);
  } catch (error) {
    console.error("Failed to generate configs:", error);
    process.exit(1);
  }
}

generateConfigs();
