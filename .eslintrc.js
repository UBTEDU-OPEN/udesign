module.exports = {
  root: true,
  ignorePatterns: ['**/node_modules', '**/.cache', 'build', '.next'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:react/recommended', 'plugin:import/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
      parser: '@babel/eslint-parser',
      plugins: ['react', 'react-hooks', 'import'],
    },
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['content/**'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'plugin:react/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
    },
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
