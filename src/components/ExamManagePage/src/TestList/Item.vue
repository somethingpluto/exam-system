<template>
  <div class="test-item" @click="detailInfo">
    <div>
      <n-card hoverable>
        <div class="test-title">{{ examInfo.source }}</div>
        <div class="test-info">{{ examInfo.description }}</div>
        <div class="test-time">{{ examInfo.examDate }}</div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { router } from '@/router'
import { examInfoStore } from '@/store'

export default defineComponent({
  props:{
    examInfo:{
    type:Object,
    default: {}
    }
  },
  setup(props) {
    const store = examInfoStore();
    const detailInfo =()=>{
      store.examInfo.source=props.examInfo.source
      router.push({path:`/exammanage/operation/detail/${props.examInfo.paperId}`})
    }
    return {
      detailInfo
    }
  }
})
</script>

<style scoped lang="css">
.test-item {
  padding: 15px;
  display: inline-block;
}
.n-card {
  width: 360px;
  height: 247px;
  position: relative;
  border-radius: 20px;
}
.n-card:hover {
  border: 0.5px solid rgba(64, 152, 252, 0.7);
}
.test-title {
  font-size: 24px;
  color: rgb(16, 16, 16);
  line-height: 36px;
}
.test-info {
  font-size: 14px;
  color: rgb(114, 114, 114);
  line-height: 20px;
  padding-top: 20px;
}
.test-time {
  font-size: 14px;
  color: rgba(114, 114, 114, 1);
  line-height: 20px;
  position: absolute;
  bottom: 15px;
}
</style>
