<template>
  <div class="layout">
    <ElContainer>
      <ElHeader class="layout-header h60 w">
        <Header v-model:open="isOpen" />
      </ElHeader>
      <ElContainer>
        <Menu v-model:open="isOpen" />
        <ElMain>
          <router-view />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElContainer, ElHeader, ElMain } from "element-plus";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

const isOpen = ref(false);
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  min-height: 100vh;
  &-header {
    border-bottom: solid 1px var(--el-menu-border-color);
  }
}
</style>
