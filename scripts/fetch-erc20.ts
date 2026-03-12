import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { addAddressPadding } from "starknet";

const outputPath = path.join(process.cwd(), "src/generated/erc20-metadata.ts");

const SN_MAIN = "0x534e5f4d41494e";

// Ekubo API response shape
type EkuboAPIToken = {
  chain_id: string;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  sort_order: number;
  visibility_priority: number;
  logo_url: string | null;
  total_supply: number | null;
  usd_price: number | null;
  bridgeInfos: Record<string, { bridge_address: string }> | null;
};

// Must stay in sync with EkuboERC20Metadata in src/index.ts
type ERC20Token = {
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

function isValidSNMainToken(token: EkuboAPIToken): boolean {
  return (
    token.chain_id === SN_MAIN &&
    BigInt(token.address ?? 0) !== 0n
  );
}

function toERC20Token(
  api: EkuboAPIToken,
): Omit<ERC20Token, "hidden" | "disabled"> {
  const token: Omit<ERC20Token, "hidden" | "disabled"> = {
    name: api.name,
    symbol: api.symbol,
    decimals: api.decimals,
    l2_token_address: addAddressPadding(api.address),
    sort_order: api.sort_order,
    total_supply: api.total_supply,
  };
  if (api.logo_url) {
    token.logo_url = api.logo_url;
  }
  return token;
}

async function loadExistingMetadata(): Promise<ERC20Token[]> {
  try {
    const { metadata } = await import(pathToFileURL(outputPath).href);
    return metadata as ERC20Token[];
  } catch {
    throw new Error("Failed to load existing metadata, starting fresh");
  }
}

async function main() {
  try {
    // Load existing metadata indexed by normalized l2_token_address
    const existingData = await loadExistingMetadata();
    const existingByAddress = new Map<string, ERC20Token>();
    for (const token of existingData) {
      existingByAddress.set(addAddressPadding(token.l2_token_address), token);
    }
    console.log(`Loaded ${existingData.length} existing tokens`);

    // Fetch latest tokens from Ekubo
    const res = await fetch("https://prod-api.ekubo.org/tokens");
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    const fetchedTokens = (await res.json()) as EkuboAPIToken[];
    console.log(`Fetched ${fetchedTokens.length} tokens from Ekubo`);

    // Filter to SN_MAIN tokens only, skipping missing or zero addresses
    const apiByAddress = new Map<string, EkuboAPIToken>();
    for (const token of fetchedTokens) {
      if (isValidSNMainToken(token)) {
        apiByAddress.set(addAddressPadding(token.address), token);
      }
    }
    console.log(`${apiByAddress.size} valid SN_MAIN tokens from Ekubo`);

    let updatedCount = 0;
    let addedCount = 0;
    const mergedData: ERC20Token[] = [];

    // Pass 1: existing tokens in their original order, updated if found in API
    for (const token of existingData) {
      const key = addAddressPadding(token.l2_token_address);
      const fetched = apiByAddress.get(key);
      if (fetched) {
        const apiFields = toERC20Token(fetched);
        const merged: ERC20Token = { ...apiFields };
        if (token.hidden !== undefined) merged.hidden = token.hidden;
        if (token.disabled !== undefined) merged.disabled = token.disabled;
        mergedData.push(merged);
        apiByAddress.delete(key); // mark as consumed
        updatedCount++;
      } else {
        // Not in Ekubo — keep as-is (manually added or delisted)
        mergedData.push(token);
        console.log(
          `Keeping existing token not in Ekubo: ${token.symbol} (${token.l2_token_address})`,
        );
      }
    }

    // Pass 2: new tokens from Ekubo not yet in existing data
    for (const fetched of apiByAddress.values()) {
      mergedData.push(toERC20Token(fetched));
      addedCount++;
    }

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileContent = `// This file is auto-generated. DO NOT EDIT IT MANUALLY.
import { EkuboERC20Metadata } from "../";

export const metadata: EkuboERC20Metadata[] = ${JSON.stringify(mergedData, null, 2)};
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`\nSuccessfully updated ERC20 metadata at: ${outputPath}`);
    console.log(
      `Total: ${mergedData.length} tokens (${updatedCount} updated, ${addedCount} new)`,
    );
  } catch (error) {
    console.error(
      `Failed to fetch ERC20 metadata: ${(error as Error).message}`,
    );
    process.exit(1);
  }
}

main();
