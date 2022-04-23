<template>
  <n-result status="404" style="margin-top: 20px;" title="404 资源不存在">
    <template #footer>
      <n-button @click="$router.go(-1)">返回上一页</n-button>
    </template>
  </n-result>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
</style>
