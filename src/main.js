/*
 * @Author: 无聊的鬼_
 * @FilePath: \Record\src\main.js
 * @Date: 2022-03-26 18:51:01
 * @LastEditTime: 2022-03-26 19:35:58
 * @Description:
 */
import Vue from "vue";
import App from "./App";
import _ from "@/utils/toolFn.js";

Vue.config.productionTip = false;
/* Global Methods */
Vue.prototype._ = _;

App.mpType = "app";

const app = new Vue({
    ...App
});
app.$mount();
