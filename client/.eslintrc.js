module.exports = {
    extends: 'airbnb',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react',
    ],
    parser: 'babel-eslint',
    rules: {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/prefer-stateless-function": "off",
        "import/prefer-default-export": "off",
        "react/destructuring-assignment": "off",
        "react/prop-types": "off",
        "react/no-unused-state": "off",
        "import/no-named-as-default": "off",
        "no-unused-vars": "off",
    },
    env: {
        "browser": true
    },
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        }
    }
};
