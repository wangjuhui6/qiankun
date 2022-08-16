<template>
  <div>
    <h1>我是首页</h1>
    <a href="javascript:;" @click="go('order')">订单</a>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function go(url: string) {
  router.push(url);
}
</script>

<style lang="less" scoped></style>
