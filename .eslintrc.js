module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: "@react-native-community",
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    "prettier/prettier": "error",
    quotes: [2, "double", { avoidEscape: true }],
  },
};
