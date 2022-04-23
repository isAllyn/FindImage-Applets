/*
 * @Author: BORING GHOST
 * @Date: 2022-04-23 16:58:10
 * @LastEditTime: 2022-04-23 17:05:39
 * @Description:首页分类 接口
 */

import request from "@/utils/request.js";
/**
 * @EVENT: 通用解构函数(假解构)
 * @PARAM: 本页面数据结构类型的数据 缺点:并没有提高性能,
 */
function splitData(data) {
    return data["data"]["data"];
}

/**
 * @EVENT: 获取分类的图片资源
 */
export function imagesApi() {
    return new Promise((resolve, reject) => {
        request
            .get("/classify/images")
            .then(res => {
                resolve(splitData(res));
            })
            .catch(e => reject(e));
    });
}
