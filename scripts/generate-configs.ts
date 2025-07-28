import fs from "fs";
import path from "path";
import sharp from "sharp";

const whitelabelPath = path.join(process.cwd(), "configs");
const jsonOutputPath = path.join(process.cwd(), "built-configs");

// Available image sizes for optimization
const ICON_SIZES = [16, 32, 64, 128, 256];
const COVER_SIZES = [768, 1024, 1440];

function loadConfigFromJson(gamePath: string): any {
  try {
    const configPath = path.join(whitelabelPath, gamePath, "config.json");
    const configContent = fs.readFileSync(configPath, "utf-8");
    const config = JSON.parse(configContent);
    const originalAssets: Record<string, string> = {};

    // Add default isPaymastered: true to all policy methods
    if (config.chains) {
      for (const chainId in config.chains) {
        const chain = config.chains[chainId];
    
        if (chain.policies?.contracts) {
          for (const contractAddress in chain.policies.contracts) {
            const contract = chain.policies.contracts[contractAddress];
    
            if (Array.isArray(contract.methods)) {
              contract.methods = contract.methods.map(
                (method: { entrypoint: string; isPaymastered?: boolean; [key: string]: any }) => ({
                  ...method,
                  isPaymastered: method.isPaymastered !== undefined ? method.isPaymastered : true,
                })
              );
            }
          }
        }
      }
    }

    // Add CDN URLs for theme assets
    if (config.theme) {
      if (config.theme.cover) {
        if (typeof config.theme.cover === "object") {
          // Handle light/dark cover variants
          const lightCover = config.theme.cover.light;
          const darkCover = config.theme.cover.dark;

          // Track original assets
          originalAssets["cover_light"] = lightCover;
          originalAssets["cover_dark"] = darkCover;

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
          // Track original assets
          originalAssets["cover"] = coverFile;

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
        // Track original assets
        originalAssets["icon"] = iconFile;

        config.theme.icon = `https://static.cartridge.gg/presets/${gamePath}/${iconFile}`;

        // Add optimized versions
        config.theme.optimizedIcon = generateOptimizedImageUrls(
          gamePath,
          iconFile,
          "icon"
        );
      }
    }

    return { config, originalAssets };
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
    result.webp[size] = `${baseName}@${size}.webp`;

    // Original format version
    result[originalFormat][size] = `${baseName}@${size}${originalExt}`;

    // PNG or JPG versions (if different from original)
    const altFormat = type === "icon" ? "png" : "jpg";
    if (altFormat !== originalFormat) {
      result[altFormat][size] = `${baseName}@${size}.${altFormat}`;
    }
  }

  return result;
}

/**
 * Writes an individual JSON config file for a game and copies/organizes assets
 * @param gamePath - The game directory name
 * @param configData - Object containing the processed config and original assets
 */
async function writeProjectConfigAndAssets(gamePath: string, configData: any) {
  try {
    if (!configData) return;

    const { config, originalAssets } = configData;

    // Create project directory
    const projectOutputDir = path.join(jsonOutputPath, gamePath);
    if (!fs.existsSync(projectOutputDir)) {
      fs.mkdirSync(projectOutputDir, { recursive: true });
    }

    // 1. Copy original assets
    for (const [key, filename] of Object.entries(originalAssets)) {
      const sourcePath = path.join(
        whitelabelPath,
        gamePath,
        filename as string
      );
      const destPath = path.join(projectOutputDir, filename as string);

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${key} asset: ${filename}`);
      }
    }

    // 1b. Generate optimized images
    const imageOptimizationPromises: Promise<void>[] = [];
    if (config.theme) {
      if (config.theme.optimizedCover && originalAssets["cover"]) {
        const coverPath = path.join(
          whitelabelPath,
          gamePath,
          originalAssets["cover"]
        );
        if (fs.existsSync(coverPath)) {
          imageOptimizationPromises.push(
            optimizeImages(coverPath, projectOutputDir, "cover")
          );
        }
      }

      if (
        config.theme.optimizedCover &&
        originalAssets["cover_light"] &&
        originalAssets["cover_dark"]
      ) {
        const coverLightPath = path.join(
          whitelabelPath,
          gamePath,
          originalAssets["cover_light"]
        );
        const coverDarkPath = path.join(
          whitelabelPath,
          gamePath,
          originalAssets["cover_dark"]
        );

        if (fs.existsSync(coverLightPath)) {
          imageOptimizationPromises.push(
            optimizeImages(coverLightPath, projectOutputDir, "cover")
          );
        }

        if (fs.existsSync(coverDarkPath)) {
          imageOptimizationPromises.push(
            optimizeImages(coverDarkPath, projectOutputDir, "cover")
          );
        }
      }

      if (config.theme.optimizedIcon && originalAssets["icon"]) {
        const iconPath = path.join(
          whitelabelPath,
          gamePath,
          originalAssets["icon"]
        );
        if (fs.existsSync(iconPath)) {
          imageOptimizationPromises.push(
            optimizeImages(iconPath, projectOutputDir, "icon")
          );
        }
      }
    }

    // Wait for all image optimizations to complete
    await Promise.all(imageOptimizationPromises);

    // 2. Transform the config to use relative paths instead of CDN paths
    const localConfig = JSON.parse(JSON.stringify(config)); // Deep clone

    if (localConfig.theme) {
      if (localConfig.theme.cover) {
        if (typeof localConfig.theme.cover === "object") {
          // Handle light/dark variants
          localConfig.theme.cover = {
            light: originalAssets["cover_light"],
            dark: originalAssets["cover_dark"],
          };
        } else {
          localConfig.theme.cover = originalAssets["cover"];
        }
      }

      if (localConfig.theme.icon) {
        localConfig.theme.icon = originalAssets["icon"];
      }
    }

    // 3. Write the config.json file to the project directory
    const jsonFilePath = path.join(projectOutputDir, "config.json");
    fs.writeFileSync(jsonFilePath, JSON.stringify(localConfig, null, 2));

    console.log(`Generated config file for ${gamePath}`);
  } catch (error) {
    console.error(`Failed to write project config for ${gamePath}:`, error);
  }
}

/**
 * Optimizes images for different sizes and formats
 * @param inputPath - Path to the original image
 * @param outputDir - Directory where optimized images will be saved
 * @param type - Either 'icon' or 'cover'
 */
async function optimizeImages(
  inputPath: string,
  outputDir: string,
  type: "icon" | "cover"
) {
  try {
    const filename = path.basename(inputPath);
    const basename = path.parse(filename).name;
    const ext = path.parse(filename).ext;

    // Get original dimensions to maintain aspect ratio for covers
    const metadata = await sharp(inputPath).metadata();
    const aspectRatio =
      metadata.width && metadata.height
        ? metadata.width / metadata.height
        : type === "icon"
        ? 1
        : 16 / 9;

    const sizes = type === "icon" ? ICON_SIZES : COVER_SIZES;

    for (const size of sizes) {
      // Calculate height based on aspect ratio for covers
      const height = type === "icon" ? size : Math.round(size / aspectRatio);

      // Original format
      await resizeAndOptimize(
        inputPath,
        path.join(outputDir, `${basename}@${size}${ext}`),
        size,
        height,
        { compressionLevel: 9 }
      );

      // WebP version
      await resizeAndOptimize(
        inputPath,
        path.join(outputDir, `${basename}@${size}.webp`),
        size,
        height,
        { quality: 85 }
      );

      // For covers, also create JPEG version
      if (type === "cover") {
        await resizeAndOptimize(
          inputPath,
          path.join(outputDir, `${basename}@${size}.jpg`),
          size,
          height,
          { quality: 85 }
        );
      }
    }
  } catch (error) {
    console.error(`Error optimizing image ${inputPath}:`, error);
  }
}

/**
 * Resizes and optimizes a single image
 */
async function resizeAndOptimize(
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
  options: any
) {
  try {
    const image = sharp(inputPath).resize(width, height);

    // Format based on output file extension
    if (outputPath.endsWith(".webp")) {
      await image.webp(options).toFile(outputPath);
    } else if (outputPath.endsWith(".jpg") || outputPath.endsWith(".jpeg")) {
      await image.jpeg(options).toFile(outputPath);
    } else if (outputPath.endsWith(".png")) {
      await image.png(options).toFile(outputPath);
    } else if (outputPath.endsWith(".svg")) {
      // Just copy SVG files - sharp doesn't process SVGs well
      fs.copyFileSync(inputPath, outputPath);
    }

    console.log(`Created optimized image: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath} to ${outputPath}:`, error);
  }
}

/**
 * Writes an index JSON file with metadata about all available configs
 * @param configsList - Array of available config names
 */
function writeConfigsIndex(configsList: string[]) {
  try {
    const indexFilePath = path.join(jsonOutputPath, "index.json");
    const indexData = {
      configs: configsList,
      baseUrl: "https://static.cartridge.gg/presets",
    };

    fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2));
    console.log(`Generated configs index at ${indexFilePath}`);
  } catch (error) {
    console.error("Failed to write configs index:", error);
  }
}

async function generateConfigs() {
  const configsList: string[] = [];

  try {
    const directories = fs
      .readdirSync(whitelabelPath)
      .filter((dir) =>
        fs.statSync(path.join(whitelabelPath, dir)).isDirectory()
      )
      .sort();

    // Ensure the JSON output directory exists
    if (!fs.existsSync(jsonOutputPath)) {
      fs.mkdirSync(jsonOutputPath, { recursive: true });
    }

    // Process each directory's config and assets
    for (const dir of directories) {
      const configData = loadConfigFromJson(dir);
      if (configData) {
        configsList.push(dir);

        // Write individual config files and copy/optimize assets
        await writeProjectConfigAndAssets(dir, configData);
      }
    }

    // Write an index of all available configs
    writeConfigsIndex(configsList);

    console.log("Successfully generated JSON configs and optimized assets");
  } catch (error) {
    console.error("Failed to generate configs:", error);
    process.exit(1);
  }
}

// We need to use an async main function since we're using async/await
(async function main() {
  await generateConfigs();
})();
