export default {
    /**
     * @EVENT: 将url字符路径中的KEY替换成80-120的数字
     * @PARAM: {Array} 传入原数据
     */
    urlReplaceNum: function (data) {
        try {
            if (!(data instanceof Array)) return data;
            let num = 80;
            for (let k = 0, len = data.length; k < len; k++) {
                num = Math.floor(Math.random() * (121 - 80) + 80);
                data[k]["img"] = data[k]["img"].replace(/KEY/g, num);
            }
        } catch (e) {
            console.log(e);
        }
    }
};
