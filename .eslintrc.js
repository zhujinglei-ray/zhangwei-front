module.exports = {
    root: true,
    parseOptions: {
        sourceType: 'module'
    },
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue3-recommended'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules :{
        'no-console': 'off',
        'comma-dangle': [2, 'never']
    }
}