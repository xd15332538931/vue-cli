module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    // "parser": "@typescript-eslint/parser",
    "parser": "vue-eslint-parser",
    // "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        ecmaFeatures: {
            "jsx": true            // 支持jsx语法
        },
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-var-requires": 0,
        "no-console": "off",// 打开console,
        "@typescript-eslint/camelcase": "off",
        'no-unused-vars': 'off',
    }
}