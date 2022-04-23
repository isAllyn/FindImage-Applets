/*
 * @Author: 无聊的鬼_
 * @FilePath: \FindImage\src\utils\toolFn.js
 * @Date: 2022-03-26 19:27:36
 * @LastEditTime: 2022-04-23 16:30:03
 * @Description:
 */
// 封装提示信息
const fail_msg_fn = function (title = "数据加载失败", duration = 1500) {
    uni.showToast({
        title,
        duration,
        icon: "none"
    });
};

/**
 * @EVENT: 成功类型的提示
 * @PARAM: title:string 提示的内容 默认OK
 */
export function successToast(title = "OK!") {
    uni.showToast({
        title,
        icon: "success"
    });
}

export default { fail_msg_fn };
