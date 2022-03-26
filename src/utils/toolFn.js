/*
 * @Author: 无聊的鬼_
 * @FilePath: \Record\src\utils\toolFn.js
 * @Date: 2022-03-26 19:27:36
 * @LastEditTime: 2022-03-26 19:33:27
 * @Description:
 */
// 封装请求失败提示信息
const fail_msg_fn = function (title = "数据加载失败", duration = 1500) {
    uni.showToast({
        title,
        duration,
        icon: "none"
    });
};

export default { fail_msg_fn };
