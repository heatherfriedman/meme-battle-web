module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'jest',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
  ],
  extends: [
    'react-app',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'no-use-before-define': 0,
    'object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
      },
    ],
    'no-debugger': 0, // 1
    'no-console': 0, // ['error', { allow: ['warn', 'error'] }],
    'no-shadow': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-constant-condition': [
      'error',
      { checkLoops: false },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'import/no-default-export': 1,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
