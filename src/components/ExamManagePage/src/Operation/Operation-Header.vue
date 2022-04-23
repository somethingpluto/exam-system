<template>
  <div class="detail-header">
    <div class="test-name">{{ examName }}</div>
    <div class="choose">
      <a href="javascript:void(0)" class="overview active">概览</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { examInfoStore } from '@/store'

export default defineComponent({
  setup() {
    const store = examInfoStore()
    const examName = store.examInfo.source

    return {
      examName
    }
  }
})
</script>

<style scoped lang="css">
.detail-header {
  width: 100%;
  height: 78px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.test-name {
  padding-left: 100px;
  height: 100%;
  line-height: 78px;
  font-size: 24px;
  font-weight: 700;
  color: rgb(16, 16, 16);
}
.choose {
  display: flex;
  justify-content: space-around;
  padding-right: 100px;
}
.overview,
.question,
.setting {
  width: 80px;
  line-height: 78px;
  font-size: 20px;
}
.active {
  color: rgb(25, 138, 250);
  font-weight: 700;
}
a {
  text-decoration: none;
  outline: none;
  color: #000;
}
</style>
