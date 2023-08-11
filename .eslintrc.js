module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'no-undef': 'off',
      'react/no-deprecated': 'off',
      'react/prop-types': [
        'error',
        {
          ignore: [
            'onNumberClick',
            'onOperatorClick',
            'onEqualClick',
            'onClearClick',
            'onDecimalClick',
            'onToggleSign',
            'value',
            'onButtonClick'
          ],
        },
      ],
    },
  };
  