// src/config-loader.ts
var CONFIG_BASE_URL = "https://static.cartridge.gg/presets";
async function getConfigsIndex() {
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
async function getAvailableConfigs() {
  const indexData = await getConfigsIndex();
  return indexData.configs;
}
async function loadConfig(configName) {
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
      if (config.theme.icon && !config.theme.icon.startsWith("http")) {
        config.theme.icon = `${prefix}/${config.theme.icon}`;
      }
      if (config.theme.cover) {
        if (typeof config.theme.cover === "string") {
          if (!config.theme.cover.startsWith("http")) {
            config.theme.cover = `${prefix}/${config.theme.cover}`;
          }
        } else {
          if (config.theme.cover.light && !config.theme.cover.light.startsWith("http")) {
            config.theme.cover.light = `${prefix}/${config.theme.cover.light}`;
          }
          if (config.theme.cover.dark && !config.theme.cover.dark.startsWith("http")) {
            config.theme.cover.dark = `${prefix}/${config.theme.cover.dark}`;
          }
        }
      }
      const prefixOptimizedImageSet = (imageSet) => {
        if (!imageSet) return;
        for (const format in imageSet) {
          if (imageSet[format]) {
            for (const size in imageSet[format]) {
              if (imageSet[format][size] && !imageSet[format][size].startsWith("http")) {
                imageSet[format][size] = `${prefix}/${imageSet[format][size]}`;
              }
            }
          }
        }
      };
      if (config.theme.optimizedIcon) {
        prefixOptimizedImageSet(config.theme.optimizedIcon);
      }
      if (config.theme.optimizedCover) {
        if (typeof config.theme.optimizedCover === "string") {
          if (!config.theme.optimizedCover.startsWith("http")) {
            config.theme.optimizedCover = `${prefix}/${config.theme.optimizedCover}`;
          }
        } else if (config.theme.optimizedCover.light || config.theme.optimizedCover.dark) {
          const themeVal = config.theme.optimizedCover;
          if (themeVal.light) {
            prefixOptimizedImageSet(themeVal.light);
          }
          if (themeVal.dark) {
            prefixOptimizedImageSet(themeVal.dark);
          }
        } else {
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
async function loadAllConfigs() {
  const indexData = await getConfigsIndex();
  const availableConfigs = indexData.configs;
  const baseUrl = indexData.baseUrl || CONFIG_BASE_URL;
  const configsMap = {};
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
export {
  getAvailableConfigs,
  getConfigsIndex,
  loadAllConfigs,
  loadConfig
};
//# sourceMappingURL=config-loader.js.map