module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    semi: 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    camelcase: 'off',
  },
};
