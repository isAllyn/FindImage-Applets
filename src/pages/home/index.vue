<!--
 * @Author: 无聊的鬼_
 * @FilePath: \Record\src\pages\home\index.vue
 * @Date: 2022-03-26 13:21:40
 * @LastEditTime: 2022-03-26 14:32:35
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
            activeColor="#000000"
        ></uni-segmented-control>
        <!-- Content -->
        <view class="content">
            <view v-show="current === 0"> 1选项卡1的内容 </view>
            <view v-show="current === 1"> 选项卡2的内容 </view>
            <view v-show="current === 2"> 选项卡3的内容 </view>
        </view>
    </view>
</template>

<script>
import { uniSegmentedControl } from "@dcloudio/uni-ui";
/* API */
import { test } from "@/api/home/index.js";
export default {
    name: "HomeIndex",
    components: { uniSegmentedControl },

    data() {
        return {
            items: ["推荐", "分类", "最新", "专辑"], //分段器所有选项
            current: 0
        };
    },
    onReady() {
        this.test1();
    },
    methods: {
        async test1() {
            let { data } = await test();
            console.log(data);
            this._.fail_msg_fn();
        },
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
@import './style/index.scss';

</style>
