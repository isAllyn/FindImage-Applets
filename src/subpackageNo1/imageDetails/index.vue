<!--
 * @Author: BORING GHOST
 * @Date: 2022-04-23 09:00:28
 * @LastEditTime: 2022-04-23 10:42:29
 * @Description: 图片详情页
-->
<template>
    <view class="ImageDetails__">
        <!-- PAGE HeaderLayout -->
        <view class="HeaderLayout">
            <view class="head">
                <view class="img">
                    <image :src="user_info.img"></image>
                </view>
            </view>
            <view class="text-container">
                <view class="name">{{ user_info.name }}</view>
                <view class="time">{{ user_info.time }}</view>
            </view>
        </view>
        <!-- PAGE Image -->
        <view class="ImageLayout">
            <image :src="image_src" />
        </view>
    </view>
</template>

<script>
/* Api */
import { userInfoApi, imageSrcApi } from "@/api/imageDetails/index.js";
export default {
    name: "ImageDetailsIndex",

    data() {
        return {
            user_info: {},
            image_src: ""
        };
    },
    created() {
        this.getDataApi();
    },
    methods: {
        /**
         * @EVENT: 请求资源
         */
        getDataApi() {
            this.getHeadInfo();
            this.updateStoreImage();
        },
        /**
         * @EVENT: 请求头像资源
         */
        async getHeadInfo() {
            try {
                let result = await userInfoApi();
                this.user_info = result;
                this.user_info.time = this.dayjs().from(this.user_info.time);
            } catch (e) {
                console.log(e);
            }
        },
        /**
         * @EVENT: 更新跳转过来所传递的url图片
         */
        async updateStoreImage() {
            let { img } = await imageSrcApi();
            this.image_src = img;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
