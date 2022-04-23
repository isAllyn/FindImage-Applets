<!--
 * @Author: BORING GHOST
 * @Date: 2022-04-23 09:00:28
 * @LastEditTime: 2022-04-23 10:04:49
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
    </view>
</template>

<script>
/* Api */
import { userInfoApi } from "@/api/imageDetails/index.js";
export default {
    name: "ImageDetailsIndex",

    data() {
        return {
            user_info: {}
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
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
