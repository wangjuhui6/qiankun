<template>
  <div class="header flex items-center h">
    <ElIcon v-if="props.open" @click="open(false)"><Expand /></ElIcon>
    <ElIcon v-else @click="open(true)"><Fold /></ElIcon>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { ElIcon } from "element-plus";
import { Expand, Fold } from "@element-plus/icons-vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open"]);

function open(status: boolean) {
  emit("update:open", status);
}
</script>

<style lang="less" scoped>
.header {
}
</style>
