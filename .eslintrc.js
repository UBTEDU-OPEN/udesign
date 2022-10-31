module.exports = {
  root: true,
  ignorePatterns: ['**/node_modules', '**/.cache', 'build', '.next'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/core-modules': ['@ubt/udesign-utils', '@ubt/udesign-constants', '@ant-design/icons'],
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
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
      extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier', 'plugin:react/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'prettier'],
      rules: {
        'arrow-body-style': 0,
        'no-nested-ternary': 0,
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'no-useless-escape': 'off',
        'no-useless-concat': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'react/display-name': [
          'error',
          {
            ignoreTranspilerName: false,
          },
        ],
        'import/no-webpack-loader-syntax': 'off',
        'no-empty-function': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['off'],
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
          },
        ],
        'no-bitwise': 'off',
        'no-underscore-dangle': 'off',
        'max-len': 'off',
        'react/prop-types': 'off',
        'no-dupe-class-members': 'off',
        'prefer-destructuring': 'off',
        'no-unused-expressions': 'off',
        'linebreak-style': 'off',
        'no-param-reassign': 'off',
        'prefer-const': 'off',
        'func-names': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-continue': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-unresolved': [
          2,
          {
            ignore: ['contentlayer', 'next-contentlayer'],
          },
        ],
      },
    },
  ],
};
