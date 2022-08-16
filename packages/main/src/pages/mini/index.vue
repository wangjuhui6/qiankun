<template>
  <div>
    111
    <div id="miniContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { start } from "qiankun";

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    start();
  }
});
</script>

<style lang="less" scoped></style>
