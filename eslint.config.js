module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['*.test.*', '*.mock.*'],
      rules: {
        'no-undef': 0,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
  },
  rules: {
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],
    'semi': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],

  },
  settings: {
    'import/resolver': {
      'babel-module': {
        configFile: './babelrc.js',
        root: ['../src'],
      },
    },
  },
};
