<!--
 * @Author: 无聊的鬼_
 * @FilePath: \FindImage\src\subpackageNo1\albumDetails\index.vue
 * @Date: 2022-04-10 17:14:52
 * @LastEditTime: 2022-04-23 10:33:46
 * @Description: 首页 专辑详情
-->
<template>
    <view class="AlbumDetails__">
        <!-- PAGE Poster -->
        <view class="PosterLayout">
            <image :src="poster_image" />
            <button class="focus-on-btn cu-btn">关注专辑</button>
        </view>
        <!-- PAGE Text -->
        <view class="TextLayout">
            <view class="title">
                <i class="avatar iconfont icon-touxiang"></i>
                <span class="text">{{ title }}</span>
            </view>
            <view class="content_text">{{ content_text }}</view>
        </view>
        <!-- PAGE Image -->
        <view class="ImageLayout">
            <block v-for="(item, index) in display_imageArr" :key="index">
                <span @click="imgEventClick(item)" class="image-item">
                    <image :src="item" />
                </span>
            </block>
        </view>
    </view>
</template>

<script>
/* api */
import { PosterApi, textTitleApi, imageDisplayApi } from "@/api/albumDetail/index.js";
export default {
    name: "HomeAlbumDetails",

    data() {
        return {
            poster_image: "", //海报的图片
            title: "", //介绍的标题
            content_text: "", //文章的内容
            display_imageArr: [] //下方所有图片
        };
    },
    onReady() {
        this.getList();
    },
    mounted() {},

    methods: {
        /**
         * @EVENT: 图片区域单个图片点击时间
         */
        imgEventClick(src) {
            this.$store.commit("imageDetails/setImage", src);
            uni.navigateTo({
                url: "/subpackageNo1/imageDetails/index"
            });
        },
        /**
         * @event: 获取所有数据
         */
        getList() {
            this.getPosterInfo();
            this.getTextInfo();
            this.getImageDisplayInfo();
        },
        /**
         * @event: 获取顶部海报数据
         */
        async getPosterInfo() {
            try {
                let { image } = await PosterApi();
                this.poster_image = image;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * @event: 获取中间文章介绍数据
         */
        async getTextInfo() {
            try {
                let { title, text } = await textTitleApi();
                this.title = title;
                this.content_text = text;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * @event: 获取下方的图片展示的所有图片数据
         */
        async getImageDisplayInfo() {
            try {
                let result = await imageDisplayApi();
                //  @issues 图片的数据是重复的,KEY 占位符需要替换成数字
                let random_num;
                for (let index = 0; index < result.length; index++) {
                    random_num = Math.floor(Math.random() * (141 - 130) + 130);
                    result[index] = result[index].replace(/KEY/g, random_num);
                }
                this.display_imageArr = result;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
