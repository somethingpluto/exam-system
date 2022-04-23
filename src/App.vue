<template>
  <div class="app">
    <NaiveProvider>
      <Entry></Entry>
    </NaiveProvider>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import { RouterView } from 'vue-router';

import NaiveProvider from './plugins/naive/NaiveProvider.vue';
import { initMsgManager } from './utils/message';

const Entry = defineComponent(function Main() {
  initMsgManager()
  return () => h(RouterView)
})

</script>

<style scoped lang="css">
.app {
  height: 100%;
}
.n-config-provider{
  height: 100%;
}
</style>
