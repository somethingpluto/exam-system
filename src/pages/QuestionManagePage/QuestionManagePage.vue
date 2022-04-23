<template>
  <div class="question-manage">
    <n-layout>
      <!-- 头部 -->
      <n-layout-header>
        <Header />
      </n-layout-header>
      <!-- 页面内容 -->
      <n-layout-content>
        <Router-View />
      </n-layout-content>
      <!-- 底部信息 -->
      <n-layout-footer>
        <Page-Bottom />
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageBottom from '@/components/PageBottom/PageBottom.vue'
import Header from '@/components/QuestionManagePage/Header.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components:{
    PageBottom,
    Header
  }
})
</script>

<style scoped lang="css">
.question-manage,
.n-layout{
  height: 100%;
}
.n-layout-header {
  height: 9%;
  background-color: #101010;
}
.n-layout-content {
  min-height: 82%;
  height: auto;
  background-color: rgb(235, 235, 235);
}
.n-layout-footer {
  height: 9%;
  background-color: #f0f0f0;
}
</style>
