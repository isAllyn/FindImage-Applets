<!--
 * @Author: BORING GHOST
 * @Date: 2022-04-23 11:15:26
 * @LastEditTime: 2022-04-23 13:54:44
 * @Description: 图片手指滑动组件
-->
<template>
    <view @touchstart="touchstartEvent" @touchend="touchendEvent" class="ImageSlideTem__">
        <image :src="src" />
    </view>
</template>

<script>
export default {
    name: "ImageSlideTem",
    props: {
        src: {
            type: String
        }
    },
    data() {
        return {
            direction: "", //方向
            start: 0
        };
    },
    methods: {
        /**
         * @EVENT: 手指滑动开始
         */
        touchstartEvent(ev) {
            this.start = ev.changedTouches[0]["pageX"];
        },
        /**
         * @EVENT: 手指滑动结束
         */
        touchendEvent(ev) {
            if (Math.abs(ev.changedTouches[0]["pageX"] - this.start) < 110) return;
            this.direction = ev.changedTouches[0]["pageX"] > this.start ? "right" : "left";
            this.$emit("slideEvent", this.direction);
        }
    }
};
</script>

<style lang="scss" scoped>
.ImageSlideTem__ {
    width: 100%;
    height: 100%;
}
</style>
