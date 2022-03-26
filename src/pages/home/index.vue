<!--
 * @Author: 无聊的鬼_
 * @FilePath: \Record\src\pages\home\index.vue
 * @Date: 2022-03-26 13:21:40
 * @LastEditTime: 2022-03-26 13:50:45
 * @Description: 首页
-->
<template>
    <view class="box">
        首页
        <uni-badge text="1"></uni-badge>1
        <i class="iconfont icon-tupian"></i>
    </view>
</template>

<script>
import { uniBadge } from "@dcloudio/uni-ui";
export default {
    name: "HomeIndex",
    components: { uniBadge },

    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.box {
  .box {
    color: red;
  }
}

</style>
