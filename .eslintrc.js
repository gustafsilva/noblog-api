module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jest": true
  },
  "plugins": [
    "security"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:security/recommended"
  ],
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ]
  }
};