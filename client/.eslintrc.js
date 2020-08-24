module.exports = {
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'linebreak-style': ['error', 'windows'],
    }
};
