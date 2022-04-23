<template>
  <n-scrollbar class="front-layout">
    <PageHeader></PageHeader>
    <RouterView></RouterView>
    <PageBottom></PageBottom>
  </n-scrollbar>
</template>
<script lang="ts" setup>
import PageBottom from '@/components/PageBottom/PageBottom.vue';

import PageHeader from './components/PageHeader.vue';

</script>
<style lang="scss">
.front-layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background: #f0f0f0;
}
</style>
