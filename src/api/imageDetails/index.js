/*
 * @Author: BORING GHOST
 * @Date: 2022-04-23 09:12:01
 * @LastEditTime: 2022-04-23 15:00:18
 * @Description: 图片详情 api
 */
import request from "@/utils/request";

/**
 * @EVENT: 通用解构函数(假解构)
 * @PARAM: 本页面数据结构类型的数据 缺点:并没有提高性能,
 */
function splitData(data) {
    return data["data"]["data"];
}

/**
 * @EVENT: 用户信息接口
 */
export function userInfoApi() {
    return new Promise((resolve, reject) => {
        request.get("/ImageDetails/userInfo").then(
            res => {
                resolve(splitData(res));
            },
            e => reject(e)
        );
    });
}

/**
 * @EVENT: 图片详情接口
 */
export function imageSrcApi() {
    return new Promise((resolve, reject) => {
        request.get("/ImageDetails/image").then(
            res => {
                resolve(splitData(res));
            },
            e => reject(e)
        );
    });
}

/**
 * @EVENT: 卡片信息
 */
export function cardInfoApi() {
    return new Promise((resolve, reject) => {
        request.get("/ImageDetails/cardInfo").then(
            res => {
                resolve(splitData(res));
            },
            e => reject(e)
        );
    });
}
/**
 * @EVENT: 评论区所有的用户
 */
export function commentAreaApi() {
    return new Promise((resolve, reject) => {
        request.get("/ImageDetails/CommentArea").then(
            res => {
                resolve(splitData(res));
            },
            e => reject(e)
        );
    });
}
