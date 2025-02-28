import process from 'process'

/**
 * Detects which package manager is being used based on how the CLI was invoked
 * @returns {'npm' | 'pnpm' | 'yarn' | 'bun'} The detected package manager
 */
export function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent
  const execPath = process.env.npm_execpath || ''

  if (userAgent?.includes('yarn') || execPath.includes('yarn')) {
    return 'yarn'
  }

  if (userAgent?.includes('pnpm') || execPath.includes('pnpm')) {
    return 'pnpm'
  }

  if (userAgent?.includes('bun') || execPath.includes('bun')) {
    return 'bun'
  }

  // Default to npm
  return 'npm'
}

/**
 * Gets the appropriate package manager command for installing dependencies
 * @param {'npm' | 'pnpm' | 'yarn' | 'bun'} packageManager The package manager to use
 * @param {boolean} isDev Whether to install as a dev dependency
 * @returns {string} The install command
 */
export function getInstallCommand(
  packageManager,
  isDev = false,
  isFinal = false
) {
  const commands = {
    npm: `npm install${isDev ? ' -D' : ''}`,
    pnpm: `pnpm add${isDev ? ' -D' : ''}`,
    yarn: `yarn add${isDev ? ' -D' : ''}`,
    bun: `bun add${isDev ? ' -D' : ''}`
  }

  if (isFinal) {
    if (packageManager === 'pnpm') {
      return 'pnpm i --shamefully-hoist'
    }
  }

  return commands[packageManager]
}

/**
 * Gets the appropriate package manager command for creating a new Next.js app
 * @param {'npm' | 'pnpm' | 'yarn' | 'bun'} packageManager The package manager to use
 * @returns {string} The create command prefix
 */
export function getCreateCommand(packageManager) {
  const commands = {
    npm: 'npx',
    pnpm: 'pnpm dlx',
    yarn: 'yarn dlx',
    bun: 'bunx'
  }
  return commands[packageManager]
}
