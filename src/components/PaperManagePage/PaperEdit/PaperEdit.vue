<template>
  <div class="paper-edit">
    <!--    头部标题-->
    <div class="header">
      <div class="title">{{ examInfo.source }}试卷</div>
      <div class="operation">
        <div class="preview">预览</div>
        <div class="button">
          <n-button type="info" size="medium" @click="savePaper">
            保存
          </n-button>
        </div>
      </div>
    </div>
    <div class="body">
      <Edit />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Edit from '@/components/PaperManagePage/PaperEdit/Edit.vue'
import { examInfoStore } from '@/store';
import SavePaper from './SavePaper.vue';
import { successMsg } from '@/utils/message';

export default defineComponent({
  setup() {
    const store = examInfoStore()
    const examInfo = store.examInfo
    const savePaper = ()=>{
      successMsg("试卷已保存")
    }
    return {
      examInfo,
      savePaper
    }
  },
  components:{
    Edit,
    SavePaper
}
})
</script>

<style scoped lang="css">
.paper-edit {
  min-height: 100%;
  height: auto;
  background-color: #ebebeb;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 78px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 24px;
  color: rgb(16, 16, 16);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 180px;
}
.operation {
  width: 200px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-right: 180px;
}

.preview {
  font-weight: 700;
  color: rgb(25, 138, 250);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 78px;
}
.button {
  line-height: 78px;
}
.body {
  min-height: auto;
  height: auto;
  margin-bottom: 0;
}
</style>
