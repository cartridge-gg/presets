import type { TypedData } from "@starknet-io/types-js";
import { metadata } from "./generated/erc20-metadata";
import config from "../configs/cartridge/config.json";
config.theme.icon = "https://static.cartridge.gg/presets/cartridge/icon.svg";

export * from "./config-loader";

export const erc20Metadata = metadata;
export const defaultTheme = config.theme;

export type EkuboERC20Metadata = {
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

export type Policy = CallPolicy | TypedDataPolicy;

export type CallPolicy = {
  target: string;
  method: string;
  description?: string;
};

export type TypedDataPolicy = Omit<TypedData, "message">;
export type Policies = Policy[] | SessionPolicies;

export type ChainId = string;

export type SessionPolicies = {
  /** The key must be the contract address */
  contracts?: ContractPolicies;
  messages?: SignMessagePolicy[];
};

export type Chains = {
  /** Map of chain IDs to specific chain policies */
  [chainId: ChainId]: { policies: SessionPolicies };
};

export type ContractPolicies = Record<string, ContractPolicy>;

export type ContractPolicy = {
  name?: string;
  description?: string;
  methods: (Method | Approval)[];
};

export type PolicyPredicate = {
  address: string;
  entrypoint: string;
};

export type BaseMethodProperties = {
  name?: string;
  description?: string;
  /**
   * The spender address for approval methods (e.g., ERC20 approve, ERC721 setApprovalForAll).
   * Specifies which address is being approved to spend/transfer tokens on behalf of the owner.
   */
  spender?: string;
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

export type Method = BaseMethodProperties & {
  entrypoint: Exclude<string, "approve">;
};

export type Approval = BaseMethodProperties & {
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
};

export type SignMessagePolicy = TypedDataPolicy & {
  name?: string;
  description?: string;
  /**
   * Whether the message policy is togglable by the user.
   * If true, user can't toggle the policy.
   * @default false
   */
  isRequired?: boolean | false;
};

export type AppleAppSiteAssociation = {
  webcredentials: {
    apps: string[];
  };
};

export type ControllerConfig = {
  origin: string | string[];
  "apple-app-site-association"?: AppleAppSiteAssociation;
  chains?: Chains;
  theme?: ControllerTheme;
};

export type ControllerConfigs = Record<string, ControllerConfig>;

export type ColorMode = "light" | "dark";

export type OptimizedImageSet = {
  webp: Record<number, string>;
  [format: string]: Record<number, string>;
};

export type ControllerTheme = {
  name: string;
  icon: string;
  cover?: ThemeValue<string>;
  optimizedIcon?: OptimizedImageSet;
  optimizedCover?: ThemeValue<OptimizedImageSet>;
  colors?: ControllerColors;
};

export type ControllerColors = {
  primary?: ControllerColor;
  primaryForeground?: ControllerColor;
};

export type ControllerColor = ThemeValue<string>;

export type ThemeValue<T> = T | { dark: T; light: T };
