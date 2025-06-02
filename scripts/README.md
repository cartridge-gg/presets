# Script Utilities

This directory contains utility scripts for building and maintaining the presets package.

## Image Optimization (`optimize-images.ts`)

This script processes all project theme images (icons and covers) to create optimized versions for web use.

### Features:

-   Generates multiple sizes for responsive use:
    -   Icons: 16px, 32px, 64px, 128px, 256px
    -   Covers: 768px, 1024px, 1440px
-   Creates both high-efficiency WebP format and fallback formats (PNG for icons, JPEG for covers)
-   Maintains proper aspect ratios
-   Automatically uploaded to the same GCS bucket/path as the original images

### Output Structure

The optimized images are uploaded to the same directory as the original images. They follow this naming pattern:

    configs/
      [project-name]/
        icon.png  (original)
        cover.png (original)
        icon@16.png
        icon@16.webp
        icon@32.png
        icon@32.webp
        ...
        cover@768.png
        cover@768.webp
        cover@768.jpg
        ...

The naming convention follows the original file name with a size suffix using the `@` symbol.

### Usage in Applications

The optimized images are accessible through the ControllerTheme interface:

```typescript
import { controllerConfigs } from "@cartridge/presets";

// Get theme config
const theme = controllerConfigs["project-name"].theme;

// Original images
const iconUrl = theme.icon;
const coverUrl = theme.cover;

// Responsive icon image at 64px
const responsiveIconWebp = theme.optimizedIcon.webp[64];
const responsiveIconPng = theme.optimizedIcon.png[64];

// Responsive cover image at 1024px (with potential formats)
const responsiveCoverWebp = theme.optimizedCover.webp[1024];
const responsiveCoverJpg = theme.optimizedCover.jpg[1024];
const responsiveCoverPng = theme.optimizedCover.png[1024]; // If the original was a PNG
```

## Config Validation (`validate-configs.ts`)

This script validates all config.json files in the `configs` directory to ensure they meet the required standards.

### Features:

-   Validates that all referenced asset files (icons and covers) exist in the filesystem
-   Supports both simple string cover paths and object covers with light/dark theme variants
-   Flags usage of the `approve` entrypoint as warnings for security review
-   Provides GitHub Actions annotations for CI/CD integration
-   Outputs clear error messages with line numbers for easy debugging

### Validation Rules:

1.  **Asset Validation**: Checks that all files referenced in `theme.icon` and `theme.cover` exist
    -   For simple covers: `"cover": "cover.png"`
    -   For themed covers: `"cover": { "light": "cover-light.png", "dark": "cover-dark.png" }`

2.  **Entrypoint Security**: Warns about any method using the `approve` entrypoint, which requires special attention for security reasons

### Usage:

```bash
# Validate all config files
pnpm validate:configs

# Validate specific files
pnpm validate:configs configs/zkube/config.json
pnpm validate:configs configs/zkube/config.json,configs/pistols/config.json

# The script will output:
# - ERROR: for missing asset files (exit code 1)
# - WARNING: for approve entrypoints (exit code 0)
```

### GitHub Actions Integration:

The script is automatically run on pull requests and pushes that modify config files. It will:

-   Only validate config files that have been changed in the PR/push (for efficiency)
-   Add inline annotations to the PR for any issues found
-   Post a comment on the PR if validation fails
-   Block merging if there are errors (missing assets)
-   Skip validation entirely if no config files were modified
