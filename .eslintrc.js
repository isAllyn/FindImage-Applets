/*
 * @Author: 无聊的鬼_
 * @FilePath: \Record\.eslintrc.js
 * @Date: 2022-03-26 18:51:01
 * @LastEditTime: 2022-03-26 19:15:11
 * @Description:
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:vue/essential"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    globals: {
        uni: true,
        wx: true
    },
    plugins: ["vue"],
    rules: {
        semi: [2, "always"],
        "no-console": 0
    }
};
