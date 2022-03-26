/*
 * @Author: 无聊的鬼_
 * @FilePath: \Record\src\api\home\index.js\
 * @Date: 2022-03-26 19:28:39
 * @LastEditTime: 2022-03-26 19:29:58
 * @Description:
 */
import request from "../../utils/request";

export const test = () => {
    return request.get("/recommend");
};
