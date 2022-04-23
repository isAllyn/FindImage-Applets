<!--
 * @Author: 无聊的鬼_
 * @FilePath: \item\src\pages\home\components\recommend.vue
 * @Date: 2022-04-04 15:05:48
 * @LastEditTime: 2022-04-23 08:57:28
 * @Description: 首页 推荐
-->
<template>
    <view class="Recommend__">
        <!-- PAGE Header -->
        <view class="HeaderLayout">
            <block v-for="(item, index) in header_imageArray" :key="index">
                <view @click="headerImgItemEventClick" class="image-item">
                    <image :src="item" />
                </view>
            </block>
        </view>
        <!-- PAGE More -->
        <view class="MoreLayout">
            <view class="title">
                <span class="text-max">{{ now_time.split("/")[1] }}</span>
                <span class="text-item">/{{ now_time.split("/")[0] }}月</span>
                <span class="text-title">你负责美丽就好</span>
                <span class="text-more">
                    更多
                    <i class="iconfont icon-gengduo"></i>
                </span>
            </view>
            <view class="content">
                <block v-for="(item, index) in more_imageArray" :key="index">
                    <view class="image-item">
                        <image :src="item" />
                    </view>
                </block>
            </view>
        </view>
        <!-- PAGE Popular -->
        <view class="PopularLayout">
            <view class="title">
                <text class="text-item">热门</text>
            </view>
            <view class="content">
                <block v-for="(item, index) in popular_imageArray" :key="index">
                    <view class="image-item">
                        <image :src="item" />
                    </view>
                </block>
            </view>
        </view>
    </view>
</template>

<script>
/* Api */
import { recommendHeaderImageApi, recommendMoreImageApi, recommendPopularImageApi } from "@/api/home/index.js";
export default {
    name: "comRecommend",

    data() {
        return {
            header_imageArray: [], //header部分图片数据
            more_imageArray: [], //more部分图片数据
            popular_imageArray: [], //popular 部分图片数据
            now_time: "" //当天日期
        };
    },
    created() {
        this.now_time = this.dayjs().format("MM/DD");
        this.getInfo();
    },
    mounted() {},

    methods: {
        /**
         * @EVENT: Header部分单个图片点击
         * @TIP: 点击跳转到专辑详情页
         */
        headerImgItemEventClick() {
            uni.navigateTo({
                url: "/subpackageNo1/albumDetails/index"
            });
        },
        /**
         * @event: 获取该组件的数据
         * @params {*}
         */
        getInfo() {
            this.getHeaderInfo();
            this.getMoreInfo();
            this.getPopularInfo();
        },
        /**
         * @event: 获取 popular 部分数据
         * @params {*}
         */
        async getPopularInfo() {
            try {
                let data = await recommendPopularImageApi();
                this.popular_imageArray = data;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * @event: 获取Header部分数据
         * @params {*}
         */
        async getHeaderInfo() {
            try {
                let data = await recommendHeaderImageApi();
                this.header_imageArray = data;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * @event: 获取More部分数据
         * @params {*}
         */
        async getMoreInfo() {
            try {
                let data = await recommendMoreImageApi();
                this.more_imageArray = data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.Recommend__ {
    .HeaderLayout {
        display: grid;

        grid-template-columns: 1fr 1fr;
        column-gap: 10rpx;
        row-gap: 10rpx;

        .image-item {
            height: 100px;
        }
    }

    .MoreLayout {
        .title {
            display: flex;
            padding: 10rpx;
            justify-content: flex-start;
            font-weight: 700;
            align-items: flex-end;
            .text-max {
                color: rgba(206, 79, 128, 1);
                font-size: 40rpx;
            }
            .text-item {
                color: rgba(206, 79, 128, 1);
                margin-right: 10rpx;
            }
            .text-more {
                flex: 1;
                color: rgba(206, 79, 128, 1);
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 10px;
            }
        }
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 10rpx;
            row-gap: 10rpx;
            .image-item {
                height: 230px;
            }
        }
    }
    .PopularLayout {
        .title {
            padding: 10rpx;
            height: 28px;
            .text-item {
                font-weight: 700;
                border-left: 5px solid rgba(206, 79, 128, 1);
                padding-left: 10rpx;
            }
        }
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 10rpx;
            row-gap: 10rpx;
            .image-item {
                height: 230px;
            }
        }
    }
}
</style>
