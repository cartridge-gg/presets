import { TypedData } from '@starknet-io/types-js';

declare const controllerConfigs: ControllerConfigs;
declare const erc20Metadata: EkuboERC20Metadata[];
declare const defaultTheme: ControllerTheme;
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
type SessionPolicies = {
    /** The key must be the contract address */
    contracts?: ContractPolicies;
    messages?: SignMessagePolicy[];
};
type ContractPolicies = Record<string, ContractPolicy>;
type ContractPolicy = {
    name?: string;
    description?: string;
    methods: Method[];
};
type Method = {
    name?: string;
    description?: string;
    entrypoint: string;
};
type SignMessagePolicy = TypedDataPolicy & {
    name?: string;
    description?: string;
};
type ControllerConfig = {
    origin: string | string[];
    policies?: SessionPolicies;
    theme?: ControllerTheme;
};
type ControllerConfigs = Record<string, ControllerConfig>;
type ColorMode = "light" | "dark";
type ControllerTheme = {
    name: string;
    icon: string;
    cover: ThemeValue<string>;
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

export { type CallPolicy, type ColorMode, type ContractPolicies, type ContractPolicy, type ControllerColor, type ControllerColors, type ControllerConfig, type ControllerConfigs, type ControllerTheme, type EkuboERC20Metadata, type Method, type Policies, type Policy, type SessionPolicies, type SignMessagePolicy, type ThemeValue, type TypedDataPolicy, controllerConfigs, defaultTheme, erc20Metadata };
