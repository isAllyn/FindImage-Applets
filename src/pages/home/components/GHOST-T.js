export default {
    /**
     * @EVENT: 将数据中的KEY展位词换成随机的数字
     * @PARAM: data:Array 接口响应的数据
     */
    urlKeyReplaceNum: function (data) {
        try {
            if (!(data instanceof Array)) return data;
            let num = 100;
            for (let k = 0, len = data.length; k < len; k++) {
                num = Math.floor(Math.random() * (121 - 100) + 100);
                data[k]["img"] = data[k]["img"].replace(/KEY/g, num);
            }
        } catch (e) {
            console.log(e);
        }
    }
};
