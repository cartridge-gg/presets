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
    const response = await fetch(`${baseUrl}/${configName}/config.json`);
    if (!response.ok) {
      throw new Error(
        `Failed to load config ${configName}: ${response.statusText}`
      );
    }
    return await response.json();
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