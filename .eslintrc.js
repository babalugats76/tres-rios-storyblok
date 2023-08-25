module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: ['*.json'],
  extends: ['@nuxtjs/eslint-config', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-pro': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'no-undef': 'off',
    'no-dupe-keys': 'off',
    'no-unused-vars': 'warn',
    'vue/no-multiple-template-root': 'warn',
  },
};
