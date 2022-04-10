/*
 * @Author: 无聊的鬼_
 * @FilePath: \FindImage\src\api\albumDetail\index.js
 * @Date: 2022-04-10 17:32:32
 * @LastEditTime: 2022-04-10 18:32:11
 * @Description:专辑详情 API
 */
import request from "@/utils/request";
/**
 * @event: 响应的数据是多层的,这个函数用来将有用的数据解构出来
 * @params {*} res 需要解构的数据
 * @return 将解构好的数据返回
 */
function resultBreakDown(res) {
    let {
        data: { data }
    } = res;
    return data;
}
/**
 * @event: 详情 顶部海报图片api
 */
export const PosterApi = () => {
    return new Promise((resolve, reject) => {
        request
            .get("/AlbumDetails/Poster")
            .then(res => {
                resolve(resultBreakDown(res));
            })
            .catch(e => reject(e));
    });
};
/**
 * @event: 专辑详情-文章介绍
 */
export function textTitleApi() {
    return new Promise((resolve, reject) => {
        request
            .get("/AlbumDetails/titleText")
            .then(res => {
                resolve(resultBreakDown(res));
            })
            .catch(e => reject(e));
    });
}
/**
 * @event: 专辑详情 图片展示
 */
export function imageDisplayApi() {
    return new Promise((resolve, reject) => {
        request
            .get("/AlbumDetails/imageList")
            .then(res => {
                resolve(resultBreakDown(res));
            })
            .catch(e => reject(e));
    });
}
