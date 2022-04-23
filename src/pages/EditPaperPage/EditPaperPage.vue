<template>
  <div class="edit-paper">
    <n-layout vertical size="large">
      <!-- 页面内容 -->
      <n-layout-content>
        <div class="content">
          <Paper-Edit />
        </div>
      </n-layout-content>
      <!-- 底部信息 -->
      <n-layout-footer>
        <div class="footer">
          <Page-Bottom />
        </div>
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageBottom from '@/components/PageBottom/PageBottom.vue'
import PaperEdit from '@/components/PaperManagePage/PaperEdit/PaperEdit.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components:{
    PaperEdit,
    PageBottom
  }
})
</script>

<style scoped lang="css">
.n-layout-content {
  width: 100%;
  min-height: 758px;
  height: auto;
  background-color: #ebebeb;
}
.n-layout-footer {
  height: 79px;
  background-color: #f0f0f0;
}
.content {
  min-height: 758px;
  height: auto;
}
</style>
