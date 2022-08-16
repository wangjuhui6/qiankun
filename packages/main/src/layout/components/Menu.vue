<template>
  <ElMenu
    :class="{
      menu: true,
      'menu-open': !props.open,
    }"
    :collapse="props.open"
  >
    <template v-for="(item, index) in layoutList" :key="index">
      <!-- 有子集 -->
      <ElSubMenu v-if="item.children" :index="index + ''">
        <template #title>
          <ElIcon>
            <HomeFilled />
          </ElIcon>
          <span>{{ item.meta.name }}</span>
        </template>
        <ElMenuItemGroup>
          <ElMenuItem
            v-for="(val, idx) in item.children"
            :index="index + '-' + idx"
            :key="idx"
            @click="go(val)"
          >
            {{ val.meta.name }}
          </ElMenuItem>
        </ElMenuItemGroup>
      </ElSubMenu>
      <!-- 无子集 -->
      <ElMenuItem :index="index + ''" v-else @click="go(item)">
        <ElIcon>
          <HomeFilled />
        </ElIcon>
        <template #title>
          {{ item.meta.name }}
        </template>
      </ElMenuItem>
    </template>
  </ElMenu>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import {
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElIcon,
} from "element-plus";
import { HomeFilled } from "@element-plus/icons-vue";
import { layoutList } from "@/router";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

function go(data: { path: string }) {
  router.push(data.path);
}
</script>

<style lang="less" scoped>
.menu {
  height: calc(100vh - 60px);
  overflow-y: auto;
  &-open {
    width: 200px;
  }
}
</style>
