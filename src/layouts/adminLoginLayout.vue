<template>
  <div class="page">
    <div class="page-inner">
      <div class="header">
        <n-icon size="40">
          <PaperPlane></PaperPlane>
        </n-icon>
        <h2>考试系统后台管理</h2>
      </div>

      <CommonCard shadow="always">
        <RouterView></RouterView>
      </CommonCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PaperPlane } from '@vicons/fa'

import CommonCard from '@/components/CommonCard.vue';
</script>
<style lang="scss" scoped>
.page {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("@/assets/img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .page-inner {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    min-width: 400px;

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(0, 0, 0, 0.8);

      h2 {
        font-size: 40px;
        font-weight: 200;
        text-align: center;
        margin-left: 20px;
      }
    }
  }
}
</style>
