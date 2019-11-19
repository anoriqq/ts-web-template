module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:node/recommended', 'google'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: '.',
  },
  plugins: ['react', 'prettier', 'node', '@typescript-eslint'],
  settings: {
    node: {
      tryExtensions: ['.ts', '.js', '.json', '.node'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 0,
    'no-process-exit': 0,
    'spaced-comment': [2, 'always', {line: {markers: ['/']}}],
    indent: [2, 2, {MemberExpression: 1}],
    'arrow-parens': [2, 'as-needed'],
    'require-jsdoc': 0,
    'no-unused-vars': 0,
    'max-len': 0,
    'new-cap': 0,
  },
};
