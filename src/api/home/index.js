/*
 * @Author: 无聊的鬼_
 * @FilePath: \item\src\api\home\index.js
 * @Date: 2022-03-26 19:28:39
 * @LastEditTime: 2022-04-23 16:58:00
 * @Description:
 */
import request from "../../utils/request";

/**
 * @event: 处理响应的值
 * @param {*} res 需要解构的数据,也就是响应过来的数据
 * @return 将被解构出来的有用的数据返回
 */
let deconstructTheResult = res => {
    let {
        data: {
            data: [{ top }]
        }
    } = res;
    return top;
};

/**
 * @event: 处理数据
 * @issues 防止所有图片出现相同
 * @tip 更改宽度
 * @params {*}
 */
let symbolResult = (res, max = 140, min = 130) => {
    let result = [];
    let random, str_arr;
    for (let index = 0; index < res.length; index++) {
        random = Math.floor(Math.random() * (max - min) + min);
        str_arr = res[index].split("KEY");
        result[index] = str_arr[0] + random + str_arr[1];
    }
    return result;
};
/**
 * @event: 处理单张图片
 * @issues 防止图片重复
 * @params {*} url 这个图片的地址
 */
let notRepeatTheImage = (url, max = 120, min = 110) => {
    let str_arr = url.split("KEY");
    let random_num = Math.floor(Math.random() * (max - min) + min);
    let result = str_arr[0] + random_num + str_arr[1];
    return result;
};
/**
 * @event: 专辑下的列表数据
 * @params {*}
 */
export const albumListInfoApi = () => {
    return new Promise((resolve, reject) => {
        request
            .get("/album/list")
            .then(res => {
                let result_array = deconstructTheResult(res);
                for (let index = 0; index < result_array.length; index++) {
                    result_array[index]["image"] = notRepeatTheImage(result_array[index]["image"]);
                }
                resolve(result_array);
            })
            .catch(e => reject(e));
    });
};
/**
 * @event: 推荐组件中header部分图片数据
 * @params {*}
 */
export const recommendHeaderImageApi = () => {
    return new Promise((resolve, reject) => {
        request
            .get("/recommend/header")
            .then(res => {
                resolve(symbolResult(deconstructTheResult(res), 195, 186));
            })
            .catch(e => {
                reject(e);
            });
    });
};
/**
 * @event: 推荐组件中more部分图片数据
 * @params {*}
 */
export const recommendMoreImageApi = () => {
    return new Promise((resolve, reject) => {
        request
            .get("/recommend/more")
            .then(res => {
                let result = symbolResult(deconstructTheResult(res));
                resolve(result);
            })
            .catch(e => {
                reject(e);
            });
    });
};
/**
 * @event: 推荐组件中 Popular 部分图片数据
 * @params {*}
 */
export const recommendPopularImageApi = () => {
    return new Promise((resolve, reject) => {
        request
            .get("/recommend/popular")
            .then(res => {
                resolve(symbolResult(deconstructTheResult(res)));
            })
            .catch(e => reject(e));
    });
};
