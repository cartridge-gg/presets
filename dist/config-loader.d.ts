import { ControllerConfig } from './index.js';
import '@starknet-io/types-js';

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
declare function getConfigsIndex(): Promise<ConfigsIndex>;
/**
 * Loads the index of available configs from the CDN
 * @returns Promise resolving to the list of available config names
 */
declare function getAvailableConfigs(): Promise<string[]>;
/**
 * Loads a specific config from the CDN
 * @param configName The name of the config to load
 * @returns Promise resolving to the loaded config or null if not found
 */
declare function loadConfig(configName: string): Promise<ControllerConfig | null>;
/**
 * Loads all available configs from the CDN
 * @returns Promise resolving to a map of config names to their loaded configs
 */
declare function loadAllConfigs(): Promise<Record<string, ControllerConfig>>;

export { getAvailableConfigs, getConfigsIndex, loadAllConfigs, loadConfig };
