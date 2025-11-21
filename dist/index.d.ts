import { TypedData } from '@starknet-io/types-js';

declare const erc20Metadata: EkuboERC20Metadata[];
declare const defaultTheme: {
    name: string;
    icon: string;
};
type EkuboERC20Metadata = {
    name: string;
    symbol: string;
    decimals: number;
    l2_token_address: string;
    sort_order: number;
    total_supply: number | null;
    logo_url?: string;
    hidden?: boolean;
    disabled?: boolean;
};
type Policy = CallPolicy | TypedDataPolicy;
type CallPolicy = {
    target: string;
    method: string;
    description?: string;
};
type TypedDataPolicy = Omit<TypedData, "message">;
type Policies = Policy[] | SessionPolicies;
type ChainId = string;
type SessionPolicies = {
    /** The key must be the contract address */
    contracts?: ContractPolicies;
    messages?: SignMessagePolicy[];
};
type Chains = {
    /** Map of chain IDs to specific chain policies */
    [chainId: ChainId]: {
        policies: SessionPolicies;
    };
};
type ContractPolicies = Record<string, ContractPolicy>;
type ContractPolicy = {
    name?: string;
    description?: string;
    methods: (Method | Approval)[];
};
type PolicyPredicate = {
    address: string;
    entrypoint: string;
};
type BaseMethodProperties = {
    name?: string;
    description?: string;
    /**
     * Whether the methods default state is enabled in session approval.
     * @default true
     */
    isEnabled?: boolean | true;
    /**
     * Whether the method is togglable by the user.
     * If true, user can't toggle the method.
     * @default false
     */
    isRequired?: boolean | false;
    /**
     * Whether the method can be paymastered (fees paid by a third party).
     * @default true
     */
    isPaymastered?: boolean | PolicyPredicate;
};
type Method = BaseMethodProperties & {
    entrypoint: Exclude<string, "approve">;
};
type Approval = BaseMethodProperties & {
    entrypoint: "approve";
    /**
     * Approval amount for approve methods.
     *
     * Supported formats:
     * - "*": Wildcard for NFT approvals (approve any token ID)
     * - Hex string: e.g., "0xffffffffffffffffffffffffffffffff" for max uint128
     * - Decimal number: e.g., 1000000000000000000
     * - Decimal string: e.g., "1000000000000000000"
     */
    amount: string | number;
    /**
     * The spender address for approve methods.
     */
    spender: string;
};
type SignMessagePolicy = TypedDataPolicy & {
    name?: string;
    description?: string;
    /**
     * Whether the message policy is togglable by the user.
     * If true, user can't toggle the policy.
     * @default false
     */
    isRequired?: boolean | false;
};
type AppleAppSiteAssociation = {
    webcredentials: {
        apps: string[];
    };
};
type ControllerConfig = {
    origin: string | string[];
    "apple-app-site-association"?: AppleAppSiteAssociation;
    chains?: Chains;
    theme?: ControllerTheme;
};
type ControllerConfigs = Record<string, ControllerConfig>;
type ColorMode = "light" | "dark";
type OptimizedImageSet = {
    webp: Record<number, string>;
    [format: string]: Record<number, string>;
};
type ControllerTheme = {
    name: string;
    icon: string;
    cover?: ThemeValue<string>;
    optimizedIcon?: OptimizedImageSet;
    optimizedCover?: ThemeValue<OptimizedImageSet>;
    colors?: ControllerColors;
};
type ControllerColors = {
    primary?: ControllerColor;
    primaryForeground?: ControllerColor;
};
type ControllerColor = ThemeValue<string>;
type ThemeValue<T> = T | {
    dark: T;
    light: T;
};

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

export { type AppleAppSiteAssociation, type Approval, type BaseMethodProperties, type CallPolicy, type ChainId, type Chains, type ColorMode, type ContractPolicies, type ContractPolicy, type ControllerColor, type ControllerColors, type ControllerConfig, type ControllerConfigs, type ControllerTheme, type EkuboERC20Metadata, type Method, type OptimizedImageSet, type Policies, type Policy, type PolicyPredicate, type SessionPolicies, type SignMessagePolicy, type ThemeValue, type TypedDataPolicy, defaultTheme, erc20Metadata, getAvailableConfigs, getConfigsIndex, loadAllConfigs, loadConfig };
