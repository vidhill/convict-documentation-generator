module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    plugins: ['prettier'],
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'error',
        'prefer-const': 'error',
    },
};
