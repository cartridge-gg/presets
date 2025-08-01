import fs from "fs";
import path from "path";
import { getChecksumAddress } from "starknet";
import { Policies, SessionPolicies } from "@cartridge/presets";

const inputPath = path.join(process.cwd(), "configs/eternum/Policies (1).tsx");
const outputPath = path.join(
  process.cwd(),
  "src/generated/session-policies.ts",
);

function humanizeString(str: string): string {
  return str
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function toArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val];
}

async function main() {
  try {
    // Read and parse input file
    const fileContent = fs.readFileSync(inputPath, "utf-8");
    const policiesMatch = fileContent.match(
      /export const policies = (\[[\s\S]*?\]);/,
    );

    if (!policiesMatch) {
      throw new Error("Could not find policies array in input file");
    }

    const policies: Policies = eval(policiesMatch[1]);

    // Convert to session policies with chain ID namespace
    const sessionPolicies = policies.reduce<SessionPolicies>(
      (prev, p) => {
        // Initialize SN_MAIN chain ID if it doesn't exist
        if (!prev["SN_MAIN"]) {
          prev["SN_MAIN"] = { contracts: {}, messages: [] };
        }

        if ("target" in p) {
          const target = getChecksumAddress(p.target);
          const entrypoint = p.method;
          const item = {
            name: humanizeString(entrypoint),
            entrypoint: entrypoint,
            isPaymastered: true,
          };

          if (target in prev["SN_MAIN"].contracts) {
            const methods = toArray(prev["SN_MAIN"].contracts[target].methods);
            prev["SN_MAIN"].contracts[target] = {
              methods: [...methods, item],
            };
          } else {
            prev["SN_MAIN"].contracts[target] = {
              methods: [item],
            };
          }
        } else {
          prev["SN_MAIN"].messages.push(p);
        }

        return prev;
      },
      {} as SessionPolicies,
    );

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write output file
    const output = `// This file is auto-generated. DO NOT EDIT IT MANUALLY.
import { SessionPolicies } from "@cartridge/presets";

export const sessionPolicies: SessionPolicies = ${JSON.stringify(
      sessionPolicies,
      null,
      2,
    )};
`;

    fs.writeFileSync(outputPath, output);
    console.log("Successfully generated session policies at:", outputPath);
  } catch (error) {
    console.log(`Failed to generate session policies: ${error.message}`);
    process.exit(1);
  }
}

main();
