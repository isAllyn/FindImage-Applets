import vue from "vue";
import vuex from "vuex";
/* Modules */
import imageDetails from "./modules/ImageDetails.js";
vue.use(vuex);
const store = new vuex.Store({
    modules: {
        imageDetails
    }
});

export default store;
