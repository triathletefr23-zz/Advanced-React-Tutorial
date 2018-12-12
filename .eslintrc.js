module.exports = {
  "parser": 'babel-eslint',
  root: true,
  extends: "babel",
  "plugins": [
    "prettier"
  ],
  rules: {
    "max-len": "off",
    "strict": "error",
    "prettier/prettier": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "array-bracket-newline": ["error", "always"],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    sourceType: "script",
  },
  overrides: [
    {
      files: ["test/**/*"],
      env: {
        mocha: true
      }
    }
  ]
};