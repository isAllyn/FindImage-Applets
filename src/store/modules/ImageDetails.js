/*
 * @Author: BORING GHOST
 * @Date: 2022-04-23 10:25:24
 * @LastEditTime: 2022-04-23 10:37:18
 * @Description:图片详情 vuex
 */
export default {
    namespaced: true,
    state: {
        image: "" //图片详情图片src
    },
    mutations: {
        setImage: (state, new_src) => {
            if (typeof new_src !== "string") return;
            state.image = new_src;
        }
    }
};
