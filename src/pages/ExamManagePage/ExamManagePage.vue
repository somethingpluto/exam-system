<template>
  <div class='control-page'>
    <n-layout>
      <!-- 头部 -->
      <n-layout-header>
        <Control-Header />
      </n-layout-header>
      <!-- 页面内容 -->
      <n-layout-content>
        <KeepAlive>
          <Router-View />
        </KeepAlive>
      </n-layout-content>
      <!-- 底部信息 -->
      <n-layout-footer>
        <Page-Bottom />
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import ControlHeader from '@/components/ExamManagePage/src/TestList/Header.vue';
import PageBottom from '@/components/PageBottom/PageBottom.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    PageBottom,
    ControlHeader,
  },
});
</script>

<style scoped lang='css'>
.control-page,
.n-layout {
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
  text-align: center;
  margin: 0 auto;
}

.n-layout-footer {
  height: 9%;
  background-color: #f0f0f0;
}
</style>
