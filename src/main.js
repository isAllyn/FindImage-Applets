/*
 * @Author: 无聊的鬼_
 * @FilePath: \item\src\main.js
 * @Date: 2022-03-26 18:51:01
 * @LastEditTime: 2022-04-23 10:01:38
 * @Description:
 */
import Vue from "vue";
import App from "./App";
import _ from "@/utils/toolFn.js";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime); //多久时间之前

Vue.config.productionTip = false;
/* Global Methods */
Vue.prototype._ = _;
/* Plugins */
Vue.prototype.dayjs = dayjs;
App.mpType = "app";

const app = new Vue({
    ...App
});
app.$mount();
