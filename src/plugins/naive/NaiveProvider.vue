<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <NMessageProvider>
      <slot></slot>
    </NMessageProvider>
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { dateZhCN, zhCN } from 'naive-ui'
</script>
<style lang="scss" scoped>
</style>
