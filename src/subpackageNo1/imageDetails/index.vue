<!--
 * @Author: BORING GHOST
 * @Date: 2022-04-23 09:00:28
 * @LastEditTime: 2022-04-23 16:35:30
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
            <imageSlide @slideEvent="slideEvent" :src="image_src"></imageSlide>
        </view>
        <!-- PAGE Discuss -->
        <view class="DiscussLayout">
            <view @click="addGiveLikeEvent" class="item give-like">
                <i :class="give_like_icon" class="iconfont icon-icon"></i>
                <span class="text">{{ give_like_num }}</span>
            </view>
            <view @click="addCollectEvent" class="item collect">
                <i :class="collect_icon" class="iconfont icon-shoucang"></i>
                <span class="text">收藏</span>
            </view>
        </view>
        <view> 相关 </view>
        <!-- PAGE Card Info -->
        <view class="CardLayout">
            <view class="img">
                <image :src="card_info.img"></image>
            </view>
            <view class="title">
                <view class="item cu-btn bg-red">
                    {{ card_info.title }}
                </view>
            </view>
            <view class="text">
                {{ card_info.text }}
            </view>
            <view class="icon">
                <i class="iconfont icon-fenxiangqianwanglianjie"></i>
            </view>
        </view>
        <!-- PAGE Download Btn -->
        <view class="DoanloadBtnLayout">
            <button @click="ImageDownloadEvent" class="cu-btn bg-red margin-tb-sm lg">Download Image</button>
        </view>
        <!-- PAGE Comment area -->
        <view class="CommentAreaLayout">
            <block v-for="(item, index) in load_user_info" :key="index">
                <view class="item">
                    <view class="img">
                        <image :src="item.img"></image>
                    </view>
                    <view class="name">
                        <span class="name-item">{{ item.name }}</span>
                        <span class="name-item">{{ item.time }}</span>
                    </view>
                    <view class="text">{{ item.text }}</view>
                    <view class="icon iconfont icon-pinglun"> </view>
                </view>
            </block>
        </view>
    </view>
</template>

<script>
/* Com */
import ImageSlide from "@/components/ImageSlide/index.vue";
/* Api */
import { userInfoApi, imageSrcApi, commentAreaApi, cardInfoApi } from "@/api/imageDetails/index.js";
/* Tool */
import G_ from "./GHOST-T.js";
import { successToast } from "@/utils/toolFn.js";

export default {
    name: "ImageDetailsIndex",
    components: {
        ImageSlide
    },
    data() {
        return {
            user_info: {},
            image_src: "",
            give_like_num: 9,
            give_like_icon: "",
            collect_icon: "",
            card_info: {},
            com_user_info: [], //存储评论用户信息但是不渲染
            load_user_info: [] //这是会被渲染的信息,默认5条
        };
    },
    onLoad() {
        this.getDataApi();
    },
    onReachBottom() {
        let num = this.load_user_info.length - 1;
        this.load_user_info = this.com_user_info.slice(0, num + 6);
    },
    methods: {
        /**
         * @EVENT: 资源下载
         */
        async ImageDownloadEvent() {
            try {
                uni.showLoading({
                    title: "下载中..."
                });
                let result = await uni.downloadFile({
                    url: this.image_src
                });
                /* eslint-disable-next-line */
                let { statusCode, tempFilePath } = result[1];
                if (statusCode !== 200) return;
                //TODO :使用下载功能将下面注释解开
                // let data = await uni.saveImageToPhotosAlbum({ filePath: tempFilePath });
                successToast("下载成功!");
                uni.hideLoading();
            } catch (e) {
                console.log(e);
            }
        },
        /**
         * @EVENT: 点赞
         */
        addGiveLikeEvent() {
            this.give_like_num++;
            this.give_like_icon = "icon-dianzan";
            setTimeout(() => {
                this.give_like_icon = "";
            }, 300);
        },
        /**
         * @EVENT: 收藏
         */
        addCollectEvent() {
            this.collect_icon = "icon-shoucang1";
            setTimeout(() => {
                this.collect_icon = "";
            }, 300);
        },
        /**
         * @EVENT: 图片滑动事件
         * @PARAM: str:string 滑动的方向
         */
        async slideEvent() {
            let { img } = await imageSrcApi();
            let random = Math.floor(Math.random() * (10 - 0) + 0);
            let num = parseFloat(img.substr(img.lastIndexOf("/") + 1));
            this.image_src = img.replace(img.substr(img.lastIndexOf("/") + 1), num - random);
        },
        /**
         * @EVENT: 请求资源
         */
        getDataApi() {
            this.getHeadInfo();
            this.updateStoreImage();
            this.getCardInfo();
            this.getComUserInfo();
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
        },
        /**
         * @EVENT: 获取卡片信息
         */
        async getCardInfo() {
            try {
                let info = await cardInfoApi();
                this.card_info = info;
            } catch (e) {
                console.log(e);
            }
        },
        /**
         * @EVENT: 获取所有评论用户的信息
         */
        async getComUserInfo() {
            try {
                let data = await commentAreaApi();
                G_.urlReplaceNum(data);
                this.com_user_info = data;
                this.load_user_info = data.slice(0, 6);
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
