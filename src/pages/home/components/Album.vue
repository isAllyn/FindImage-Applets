<!--
 * @Author: 无聊的鬼_
 * @FilePath: \item\src\pages\home\components\Album.vue
 * @Date: 2022-04-05 14:52:13
 * @LastEditTime: 2022-04-05 17:04:40
 * @Description: 首页 专辑组件
-->
<template>
    <view class="Album__">
        <!-- PAGE Swiper -->
        <view class="SwiperLayout">
            <SwiperColor></SwiperColor>
        </view>
        <!-- PAGE List -->
        <view class="ListLayout">
            <block v-for="item in list_infoArray" :key="item.title">
                <ListCard :title="item.title" :content="item.content" :image="item.image"></ListCard>
            </block>
        </view>
    </view>
</template>

<script>
/* Component */
import SwiperColor from "@/components/Swiper/index.vue";
import ListCard from "@/components/ListCard/index.vue";
/* Api */
import { albumListInfoApi } from "@/api/home/index.js";
export default {
    name: "comAlbum",

    data() {
        return {
            list_infoArray: [] //ListCard 区域数据
        };
    },
    components: {
        SwiperColor,
        ListCard
    },
    mounted() {},
    created() {
        this.getList();
    },
    methods: {
        /**
         * @event: 获取所有数据
         * @params {*}
         */
        getList() {
            this.getListAreaInfo();
        },
        /**
         * @event: 获取 list 区域的数据
         * @params {*}
         */
        async getListAreaInfo() {
            try {
                let data = await albumListInfoApi();
                this.list_infoArray = data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.Album__ {
    .SwiperLayout {
        height: 165px;
    }
    .ListLayout {
        padding: 10rpx 0;
    }
}
</style>
