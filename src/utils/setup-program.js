export function setupProgram(program) {
  return program
    .name('create-dc-app')
    .description('Create a new Next.js application with custom configurations')
    .argument('[project-directory]', 'The name of your project')
    .option('--typescript', 'Use TypeScript (default)', true)
    .option('--tailwind', 'Use Tailwind CSS (default)', true)
    .option('--eslint', 'Use ESLint (default)', true)
    .option('--src-dir', 'Use src/ directory (default)', true)
    .option('--app-router', 'Use App Router (default)', true)
    .option('--turbopack', 'Use Turborepo (default)', true)
    .option('--import-alias <alias>', 'Import alias to configure', '@/*')
}
