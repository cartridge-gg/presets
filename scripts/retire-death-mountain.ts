import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

// Do not delete a preset that has intentionally been restored in source.
if (!existsSync("configs/death-mountain/config.json")) {
  const target = "gs://c7e-prod-static/presets/death-mountain/**";
  const scope = ["--project=c7e-prod", "--quiet"];
  const objects: { name: string; timeDeleted?: string }[] = JSON.parse(
    execFileSync(
      "gcloud",
      [
        "storage",
        "objects",
        "list",
        target,
        "--raw",
        "--format=json(name,timeDeleted)",
        ...scope,
      ],
      { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] }
    )
  );

  // Listing includes noncurrent generations; only live objects need retiring.
  // An empty listing is a successful no-op on subsequent releases.
  if (objects.some((object) => !object.timeDeleted)) {
    // The fixed prefix and absence of --recursive preserve other presets and
    // archived generations. Authentication and deletion failures fail release.
    execFileSync("gcloud", ["storage", "rm", target, ...scope], {
      stdio: "inherit",
    });
  }
}
