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
