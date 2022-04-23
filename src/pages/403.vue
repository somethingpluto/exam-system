<template>
  <n-result status="403" style="margin-top: 20px;" title="403 禁止访问">
    <template #footer>
      <n-button @click="$router.go(-1)">返回上一页</n-button>
    </template>
  </n-result>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
</style>
