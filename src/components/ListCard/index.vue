<!--
 * @Author: 无聊的鬼_
 * @FilePath: \FindImage\src\components\ListCard\index.vue
 * @Date: 2022-04-05 15:27:03
 * @LastEditTime: 2022-04-10 17:20:15
 * @Description: 列表展示组件
-->
<template>
    <view @click="ListEventClick" class="list-card">
        <view class="image">
            <image :src="image" />
        </view>
        <view class="title">
            {{ title }}
        </view>
        <view class="content">
            {{ content }}
        </view>
        <view @click.stop="focusOnEventClick" class="icon-box">
            <i v-if="focus_on_bool" class="iconfont icon-yiguanzhu"></i>
            <i v-else class="iconfont icon-guanzhu"></i>
        </view>
    </view>
</template>

<script>
export default {
    name: "ListCard",
    props: {
        //标题
        title: {
            type: String,
            default: () => "[独家] 夺冠"
        },
        //内容
        content: {
            type: String,
            default: () =>
                "我们曾经彷徨疑惑,也层莫名执着,即便怎层莫名执着,即样怎样怎样怎样怎样怎样怎样怎样怎样怎样怎样怎样怎样"
        },
        //图片
        image: {
            type: String,
            default: () => "https://picsum.photos/110/110"
        }
    },
    data() {
        return {
            focus_on_bool: false //是否为关注状态
        };
    },

    mounted() {},

    methods: {
        /**
         * @event: 关注图标的点击事件
         * @params {*}
         */
        focusOnEventClick() {
            this.focus_on_bool = !this.focus_on_bool;
        },
        /**
         * @event: 单个列表整体被点击
         * @params {*}
         * 跳转至专辑详情页面
         */
        ListEventClick() {
            uni.navigateTo({
                url: "/subpackageNo1/albumDetails/index"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.list-card {
    height: 120px;
    padding: 5rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    border: 1px solid gray;
    .image {
        height: 100%;
        width: 100px;
    }
    .title {
        width: calc(100% - 100px);
        flex: 1;
        font-weight: 700;
        text-indent: 10rpx;
        display: flex;
        align-items: center;
        font-size: 16px;
        justify-content: flex-start;
        white-space: nowrap;
    }
    .content {
        flex: 2;
        width: calc(100% - 100px);
        font-size: 13px;
        text-indent: 10rpx;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        overflow: hidden;
    }
    .icon-box {
        flex: 1;
        width: calc(100% - 100px);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10rpx;
        i {
            font-size: 40rpx;
            font-weight: 700;
            color: $item-font-color;
        }
    }
}
</style>
