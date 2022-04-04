<!--
 * @Author: 无聊的鬼_
 * @FilePath: \item\src\pages\home\index.vue
 * @Date: 2022-03-26 13:21:40
 * @LastEditTime: 2022-04-04 16:36:08
 * @Description: 首页
-->
<template>
    <view class="Home__">
        <!-- Header The Page Top -->
        <uni-segmented-control
            :current="current"
            :values="items"
            @clickItem="onClickItem"
            styleType="text"
            activeColor="rgba(206, 79, 128, 1)"
        ></uni-segmented-control>
        <!-- PAGE Fixed Box -->
        <view class="FixedLayout">
            <i class="iconfont icon-wangyuanjing"></i>
        </view>
        <!-- Content -->
        <view class="content">
            <scroll-view class="scroll-container" :scroll-y="true">
                <view v-show="current === 0">
                    <!-- 推荐 -->
                    <recommend></recommend>
                </view>
                <view v-show="current === 1"> 选项卡2的内容 </view>
                <view v-show="current === 2"> 选项卡3的内容 </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
/* Component */
import { uniSegmentedControl } from "@dcloudio/uni-ui";
import recommend from "@/pages/home/components/recommend.vue";

export default {
    name: "HomeIndex",
    components: { uniSegmentedControl, recommend },

    data() {
        return {
            items: ["推荐", "分类", "最新", "专辑"], //分段器所有选项
            current: 0
        };
    },
    onReady() {},
    methods: {
        /**
         * @event: 分段器选择事件
         * @param {*} e
         */
        onClickItem(e) {
            if (this.current != e.currentIndex) {
                this.current = e.currentIndex;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./style/index.scss";
</style>
