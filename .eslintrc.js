module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
      react: {
        version: "detect",
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "no-undef": "off",
      "react/no-deprecated": "off",
      "react/prop-types": [
        "error",
        {
          ignore: [
            "onNumberClick",
            "onOperatorClick",
            "onEqualClick",
            "onClearClick",
            "onDecimalClick",
            "onToggleSign",
            "value",
            "onButtonClick",
          ],
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
  
      // Disable the import/no-extraneous-dependencies rule globally
      "import/no-extraneous-dependencies": "off",
    },
    overrides: [
      {
        files: ["src/Components/CalculatorScreen.js"],
        rules: {
          // Disable the import/no-extraneous-dependencies rule for this specific file
          "import/no-extraneous-dependencies": "off",
        },
      },
    ],
  };
  