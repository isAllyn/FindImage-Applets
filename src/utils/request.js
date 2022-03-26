/*
 * @Author: 无聊的鬼_
 * @FilePath: \Record\src\utils\request.js
 * @Date: 2022-03-26 19:24:53
 * @LastEditTime: 2022-03-26 19:28:02
 * @Description: 请求拦截
 */
import { $http } from "@escook/request-miniprogram";
let request = $http;
request.baseUrl = "https://www.fastmock.site/mock/06826449aee7ec0d03e5b13f37a604ed/allyn";
request.beforeRequest = function () {
    uni.showLoading({
        title: "加载中..."
    });
};
request.afterRequest = function () {
    uni.hideLoading();
};

export default request;
