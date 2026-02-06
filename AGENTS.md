# Repository Guidelines

This file provides guidance to Claude Code (claude.ai/code) when working with the Cartridge Controller Presets repository.

## Repository Purpose

This is the **@cartridge/presets** package - a TypeScript library containing preset configurations for Cartridge Controller themes and session scopes. It provides ready-to-use configurations for gaming applications in the Cartridge ecosystem.

## Architecture Overview

### Core Components

- **configs/**: Game-specific configuration directories containing theme assets and config.json files
- **src/**: TypeScript source code for the package API and configuration loading
- **scripts/**: Build automation and validation scripts
- **built-configs/**: Generated output directory (auto-generated)

### Package Structure

```
├── configs/              # Game preset configurations
│   ├── {game-name}/
│   │   ├── config.json   # Game configuration
│   │   ├── icon.{svg|png}# Game icon
│   │   └── cover.{png|jpg}# Game cover image
├── src/
│   ├── index.ts          # Main package exports
│   ├── config-loader.ts  # Configuration loading utilities
│   └── generated/        # Auto-generated content
├── scripts/              # Build and automation scripts
└── built-configs/        # Generated configurations (build output)
```

## Essential Commands

### Development

```bash
# Install dependencies
pnpm install

# Build the package (full build including configs and AASA)
pnpm build

# Build only configuration files
pnpm build:configs

# Build Apple App Site Association files
pnpm build:aasa

# Format code
pnpm format

# Check formatting
pnpm format:check
```

### Validation and Maintenance

```bash
# Validate all configurations
pnpm validate:configs

# Fetch latest ERC20 metadata
pnpm fetch:erc20

# Optimize images
pnpm image:optimize
```

### Publishing

```bash
# Build for publishing (without type declarations for faster builds)
pnpm build:js

# The package is published to NPM as @cartridge/presets
```

## Configuration System

### Game Configuration Format

Each game in `configs/{game-name}/config.json` follows this structure:

```json
{
  "origin": "https://game-domain.com",
  "theme": {
    "name": "Game Name",
    "icon": "icon.svg",
    "cover": "cover.png",
    "colors": {
      "primary": "#hex-color",
      "primaryForeground": "#hex-color"
    }
  },
  "chains": {
    "SN_MAIN": {
      "policies": {
        "contracts": {
          "0x123...": {
            "name": "Game Contract",
            "methods": [
              {
                "entrypoint": "method_name",
                "description": "Method description"
              }
            ]
          }
        }
      }
    }
  }
}
```

### Theme Assets

- **Icons**: SVG preferred for scalability, PNG supported
- **Covers**: PNG/JPG format, optimized for multiple resolutions
- **Images**: Automatically optimized during build process

### Session Policies

Session policies define what smart contract methods and message signing permissions are available:

- **Contract Methods**: Specific entrypoints that can be called
- **Message Signing**: TypedData policies for off-chain signatures
- **Chain-specific**: Different policies per StarkNet chain

## Build Process

### Automated Generation

The build process (`pnpm build:configs`) performs:

1. **Configuration Processing**: Reads all `config.json` files
2. **Asset URL Generation**: Creates CDN URLs for theme assets
3. **Image Optimization**: Generates multiple resolutions and formats
4. **Validation**: Ensures all configurations are valid
5. **Output Generation**: Creates `built-configs/` with processed configurations

### CDN Integration

Assets are automatically configured for CDN delivery:
- Base URL: `https://static.cartridge.gg/presets/{game-name}/{asset}`
- Optimized versions generated for different sizes and formats

## Development Workflows

### Adding a New Game Preset

1. **Create Configuration Directory**:
   ```bash
   mkdir configs/new-game-name
   ```

2. **Add Required Assets**:
   ```bash
   # Add to configs/new-game-name/
   # - config.json (required)
   # - icon.svg or icon.png (required)
   # - cover.png or cover.jpg (optional)
   ```

3. **Configure Game Settings**:
   - Edit `config.json` with origin, theme, and policies
   - Follow existing game configurations as examples

4. **Validate and Build**:
   ```bash
   pnpm validate:configs
   pnpm build:configs
   ```

### Updating ERC20 Metadata

```bash
# Fetch latest token metadata from external sources
pnpm fetch:erc20

# This updates src/generated/erc20-metadata.ts
pnpm format  # Format the generated file
```

### Asset Optimization

```bash
# Optimize all images in configs/ directories
pnpm image:optimize

# This creates multiple sizes and formats for better performance
```

## Integration Points

### StarkNet Integration

- **Chain IDs**: Supports SN_MAIN, SN_SEPOLIA
- **Contract Addresses**: StarkNet contract address format (0x...)
- **Session Policies**: Define contract method permissions

### Cartridge Controller SDK

- **Theme System**: Provides visual styling for controller UI
- **Session Management**: Defines what actions games can perform
- **Asset Loading**: Optimized asset delivery for controller interface

### Gaming Applications

- **Origin Validation**: Ensures presets only work with authorized domains
- **Permission Scoping**: Limits what actions each game can request
- **Branding**: Custom themes for game-specific controller appearance

## Code Patterns

### TypeScript Types

```typescript
import type { ControllerConfig, ControllerTheme, SessionPolicies } from '@cartridge/presets';

// Load a specific game configuration
const gameConfig: ControllerConfig = getConfig('game-name');

// Access theme data
const theme: ControllerTheme = gameConfig.theme;

// Work with session policies
const policies: SessionPolicies = gameConfig.chains?.SN_MAIN?.policies;
```

### Configuration Loading

```typescript
// Use the config loader utility
import { loadConfig } from '@cartridge/presets';

const config = loadConfig('eternum'); // Loads configs/eternum/config.json
```

### ERC20 Metadata Access

```typescript
import { erc20Metadata } from '@cartridge/presets';

// Access token metadata
const tokenInfo = erc20Metadata.find(token => 
  token.l2_token_address === '0x123...'
);
```

## Testing and Validation

### Configuration Validation

The `validate:configs` script checks:
- **JSON Schema**: All config.json files follow correct structure
- **Asset References**: Referenced assets exist in the directory
- **Contract Addresses**: Valid StarkNet address format
- **Required Fields**: All mandatory configuration fields present

### Asset Validation

- **Image Formats**: Supported formats (SVG, PNG, JPG)
- **File Sizes**: Reasonable limits for web delivery
- **Optimization**: Proper image optimization applied

## Security Considerations

### Origin Validation

- **Domain Restrictions**: Games can only be used from configured origins
- **Wildcard Usage**: Use `"*"` for development only, never production

### Session Policy Security

- **Least Privilege**: Only grant minimum required permissions
- **Method Scoping**: Limit contract methods to game-necessary functions
- **Review Process**: All new policies should be security reviewed

### Asset Security

- **Content Validation**: Images are validated during optimization
- **CDN Security**: Assets served through secure CDN with integrity checks

## Troubleshooting

### Build Issues

```bash
# Clear build cache
rm -rf built-configs/
rm -rf dist/

# Reinstall dependencies
rm -rf node_modules/
pnpm install

# Rebuild everything
pnpm build
```

### Validation Errors

```bash
# Check specific game configuration
pnpm validate:configs

# Common issues:
# - Missing required assets (icon.svg/png)
# - Invalid JSON syntax in config.json
# - Incorrect StarkNet address format
# - Missing required configuration fields
```

### Image Optimization Issues

```bash
# Check Sharp installation (image processing library)
pnpm list sharp

# Reinstall Sharp if needed
pnpm add sharp --save-dev

# Run optimization manually
pnpm image:optimize
```

## Deployment

### NPM Publishing

The package is automatically published to NPM as `@cartridge/presets` when:
- Version is bumped in package.json
- Changes are merged to main branch
- Build succeeds and all tests pass

### CDN Asset Deployment

Theme assets are deployed to `https://static.cartridge.gg/presets/` via:
- Automated sync from built-configs/
- CDN cache invalidation on updates
- Multi-resolution asset serving

## Best Practices

### Configuration Design

- **Meaningful Names**: Use descriptive game names for configuration directories
- **Consistent Theming**: Follow established color and design patterns
- **Minimal Permissions**: Grant only necessary session policy permissions

### Asset Management

- **SVG Icons**: Prefer SVG for scalable icons when possible
- **Image Quality**: Use high-quality source images for covers
- **File Sizes**: Keep assets reasonably sized for web delivery

### Development Workflow

- **Validate Early**: Run validation before committing changes
- **Test Locally**: Build and test configurations locally
- **Review Process**: Have configuration changes reviewed for security

## Package Exports

```typescript
// Main exports from @cartridge/presets
export {
  // Configuration loading utilities
  loadConfig,
  getConfig,
  
  // Type definitions
  ControllerConfig,
  ControllerTheme,
  SessionPolicies,
  
  // ERC20 metadata
  erc20Metadata,
  
  // Default theme
  defaultTheme
} from '@cartridge/presets';

// Generated ERC20 metadata
export { metadata } from '@cartridge/presets/generated/erc20-metadata';
```

This package is essential infrastructure for the Cartridge gaming ecosystem, providing standardized configuration and theming for game integrations with the Cartridge Controller wallet and session management system.

## Agent Tooling

- **Pre-commit hooks:** run `bin/setup-githooks` (configures `core.hooksPath` for this repo).

- **Source of truth:** `.agents/`.
- **Symlinks:** `CLAUDE.md` is a symlink to this file (`AGENTS.md`). Editor/agent configs should symlink skills from `.agents/skills`.
- **Skills install/update:**

```bash
npm_config_cache=/tmp/npm-cache npx -y skills add https://github.com/cartridge-gg/agents   --skill create-pr create-a-plan   --agent claude-code cursor   -y
```

- **Configs:**
  - `.agents/skills/` (canonical)
  - `.claude/skills` -> `../.agents/skills`
  - `.cursor/skills` -> `../.agents/skills`

## Code Review Invariants

- No secrets in code or logs.
- Keep diffs small and focused; avoid drive-by refactors.
- Add/adjust tests for behavior changes; keep CI green.
- Prefer check-only commands in CI (`format:check`, `lint:check`) and keep local hooks aligned.
- For Starknet/Cairo/Rust/crypto code: treat input validation, authZ, serialization, and signature/origin checks as **blocking** review items.
