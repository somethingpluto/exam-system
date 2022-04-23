<template>
  <div class="text-list">
    <template v-for="exam in examList" :key="exam.examCode">
      <Test-Item :examInfo="exam" />
    </template>
  </div>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, onMounted, ref } from 'vue'

import getTestListAction from '@/services/getTestList'
import { IExamList } from '@/services/getTestList/type'

import TestItem from './Item.vue'

export default defineComponent({
  setup() {
    const message = useMessage()
    let examList=ref<IExamList>({})
    // 定义请求函数
    const loading=async ()=>{
      console.log("loading")
      examList.value =(await getTestListAction()).data as {}
      if(!examList.value){
        message.error("获取考试列表失败")
      }else{
        message.success("获取考试列表成功")
      }
    }
    // 页面挂载时发送请求
    onMounted(loading)
    console.log(examList)
    return {
      examList
    }
  },
  components:{
    TestItem
  }
})
</script>

<style scoped lang="css">
.text-list {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 20px;
}
.n-button {
  color: #ffffff;
}
</style>
