# create-dc-app

A CLI tool to create Next.js applications with custom configurations and additional dependencies pre-installed.

## Features

- TypeScript by default
- Tailwind CSS configuration
- ESLint 9 setup
- App Router (Next.js 15+)
- src/ directory structure
- Import alias (@/\*)
- Additional useful packages pre-installed:
  - lucide-react
  - clsx
  - tailwind-merge
  - class-variance-authority
  - react-hook-form
  - shadcdn/ui
  - tailwindcss-animate
  - next-themes

## Usage

```bash
# Using npx (recommended)
npx create-dc-app my-app

# Or install globally
npm install -g create-dc-app
create-dc-app my-app
```

## Options

All options are enabled by default, but can be disabled using their respective flags:

- `--typescript` - Enable TypeScript
- `--tailwind` - Include Tailwind CSS
- `--eslint` - Include ESLint configuration
- `--src-dir` - Use a `src/` directory
- `--app-router` - Use Next.js App Router
- `--import-alias <alias>` - Configure import alias (default: @/\*)

## Development

To work on this package locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Link the package: `npm link`
4. Run `create-dc-app` from anywhere on your system

## License

MIT
