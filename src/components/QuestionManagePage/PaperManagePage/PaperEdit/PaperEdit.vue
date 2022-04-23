<template>
  <div class="paper-edit">
    <div class="header">
      <div class="title">2019级线上测试数学试卷</div>
      <div class="operation">
        <div class="preview">预览</div>
        <div class="button">
          <n-button type="info" size="large">保存</n-button>
        </div>
      </div>
    </div>
    <div class="body">
      <Edit />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Edit from '@/components/PaperManagePage/PaperEdit/Edit.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components:{
    Edit
  }
})
</script>

<style scoped lang="css">
.paper-edit {
  height: auto;
  background-color: #ebebeb;
}
.header {
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 24px;
  color: rgb(16, 16, 16);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 78px;
  margin-left: 80px;
}
.operation {
  width: 200px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-right: 80px;
}

.preview {
  font-weight: 700;
  font-size: 20px;
  color: rgb(25, 138, 250);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 78px;
}
.button {
  line-height: 78px;
}
.body {
  height: 90%;
}
</style>
