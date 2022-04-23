<!--
 * @Author: BORING GHOST
 * @Date: 2022-04-23 16:49:44
 * @LastEditTime: 2022-04-23 17:26:15
 * @Description: 首页 分类
-->
<template>
  <view class="HomeClassify__">
    <block v-for="(item,index) in images" :key="index">
      <view class="item">
        <image :src="item.img"></image>
        <span class="text">
          {{item.name}}
        </span>
      </view>
    </block>
  </view>
</template>

<script>
/* Api */
import { imagesApi } from '@/api/home/classify.js';
/* Tool */
import G_ from './GHOST-T.js';
export default {
  name: "HomeClassifyTem",

  data() {
    return {
      images: [],//所有图片信息,但是仅用于存储
      load_images: [],//会被渲染的图片信息
      page_size: 10,//每次添加10张
    };
  },
  created() {
    this.getDataApi();
  },
  mounted() { },

  methods: {
    /**
     * @EVENT: 获取页面数据
     */
    getDataApi() {
      this.getClassifyInfo();
    },
    /**
     * @EVENT: 获取分类页面数据
     */
    async getClassifyInfo() {
      try {
        let result = await imagesApi();
        G_.urlKeyReplaceNum(result);
        this.images = result;
        this.load_images = result.slice(0, 21);//默认显示20条
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.HomeClassify__ {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    background-color: gray;
    min-height: calc(100vh - 36px);
    .item {
        width: 33%;
        height: 100px;
        margin-bottom: 1px;
        position: relative;
        overflow: hidden;
        .text {
            position: absolute;
            right: 10px;
            bottom: 3px;
            color: white;
            z-index: 5;
        }
        image {
            z-index: 5;
        }
        &::after {
            content: "Loading...";
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 16px;
            font-weight: 700;
            transform: translate(-50%, -50%);
            color: rgba(60, 169, 242, 1);
        }
    }
}
</style>
