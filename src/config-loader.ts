import { ControllerConfig } from "./index";

/**
 * Base URL for loading config files from CDN
 */
const CONFIG_BASE_URL = "https://static.cartridge.gg/presets";

/**
 * Interface for the configs index file
 */
interface ConfigsIndex {
  configs: string[];
  baseUrl: string;
}

/**
 * Loads the index of available configs from the CDN
 * @returns Promise resolving to the list of available config names and base URL
 */
export async function getConfigsIndex(): Promise<ConfigsIndex> {
  try {
    const response = await fetch(`${CONFIG_BASE_URL}/index.json`);
    if (!response.ok) {
      throw new Error(`Failed to load configs index: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error loading configs index:", error);
    return { configs: [], baseUrl: CONFIG_BASE_URL };
  }
}

/**
 * Loads the index of available configs from the CDN
 * @returns Promise resolving to the list of available config names
 */
export async function getAvailableConfigs(): Promise<string[]> {
  const indexData = await getConfigsIndex();
  return indexData.configs;
}

/**
 * Loads a specific config from the CDN
 * @param configName The name of the config to load
 * @returns Promise resolving to the loaded config or null if not found
 */
export async function loadConfig(
  configName: string
): Promise<ControllerConfig | null> {
  try {
    const indexData = await getConfigsIndex();
    const baseUrl = indexData.baseUrl || CONFIG_BASE_URL;
    const prefix = `${baseUrl}/${configName}`;

    const response = await fetch(`${prefix}/config.json`);
    if (!response.ok) {
      throw new Error(
        `Failed to load config ${configName}: ${response.statusText}`
      );
    }

    const config = await response.json();

    if (config && config.theme) {
      // Prefix icon
      if (config.theme.icon && !config.theme.icon.startsWith("http")) {
        config.theme.icon = `${prefix}/${config.theme.icon}`;
      }

      // Prefix cover
      if (config.theme.cover) {
        if (typeof config.theme.cover === "string") {
          if (!config.theme.cover.startsWith("http")) {
            config.theme.cover = `${prefix}/${config.theme.cover}`;
          }
        } else {
          if (
            config.theme.cover.light &&
            !config.theme.cover.light.startsWith("http")
          ) {
            config.theme.cover.light = `${prefix}/${config.theme.cover.light}`;
          }
          if (
            config.theme.cover.dark &&
            !config.theme.cover.dark.startsWith("http")
          ) {
            config.theme.cover.dark = `${prefix}/${config.theme.cover.dark}`;
          }
        }
      }

      const prefixOptimizedImageSet = (imageSet: any) => {
        if (!imageSet) return;
        for (const format in imageSet) {
          if (imageSet[format]) {
            for (const size in imageSet[format]) {
              if (
                imageSet[format][size] &&
                !imageSet[format][size].startsWith("http")
              ) {
                imageSet[format][size] = `${prefix}/${imageSet[format][size]}`;
              }
            }
          }
        }
      };

      // Prefix optimizedIcon
      if (config.theme.optimizedIcon) {
        prefixOptimizedImageSet(config.theme.optimizedIcon);
      }

      // Prefix optimizedCover
      if (config.theme.optimizedCover) {
        if (typeof config.theme.optimizedCover === "string") {
          // This case should not happen based on types, but as a safeguard
          if (!config.theme.optimizedCover.startsWith("http")) {
            // @ts-ignore
            config.theme.optimizedCover = `${prefix}/${config.theme.optimizedCover}`;
          }
        } // Assuming ThemeValue<OptimizedImageSet>
        else if (
          (config.theme.optimizedCover as any).light ||
          (config.theme.optimizedCover as any).dark
        ) {
          // It's a ThemeValue<OptimizedImageSet>
          const themeVal = config.theme.optimizedCover as {
            light?: any;
            dark?: any;
          };
          if (themeVal.light) {
            prefixOptimizedImageSet(themeVal.light);
          }
          if (themeVal.dark) {
            prefixOptimizedImageSet(themeVal.dark);
          }
        } else {
          // It's an OptimizedImageSet directly
          prefixOptimizedImageSet(config.theme.optimizedCover);
        }
      }
    }

    return config;
  } catch (error) {
    console.error(`Error loading config ${configName}:`, error);
    return null;
  }
}

/**
 * Loads all available configs from the CDN
 * @returns Promise resolving to a map of config names to their loaded configs
 */
export async function loadAllConfigs(): Promise<
  Record<string, ControllerConfig>
> {
  const indexData = await getConfigsIndex();
  const availableConfigs = indexData.configs;
  const baseUrl = indexData.baseUrl || CONFIG_BASE_URL;
  const configsMap: Record<string, ControllerConfig> = {};

  await Promise.all(
    availableConfigs.map(async (configName) => {
      try {
        const response = await fetch(`${baseUrl}/${configName}/config.json`);
        if (response.ok) {
          const config = await response.json();
          configsMap[configName] = config;
        }
      } catch (error) {
        console.error(`Error loading config ${configName}:`, error);
      }
    })
  );

  return configsMap;
}
