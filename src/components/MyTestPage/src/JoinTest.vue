<template>
  <div class="join-test">
    <n-card>
      <div class="title">加入考试</div>
      <n-input
        v-model:value="examCode"
        size="large"
        placeholder="请输入考试编号..."
      />

      <n-button @click="(showModal = true), queryExam">来吧</n-button>
      <n-modal v-model:show="showModal">
        <n-card
          style="width: 600px"
          title="模态框"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header-extra>噢！</template>
          内容
          <template #footer>尾部</template>
        </n-card>
      </n-modal>
    </n-card>
  </div>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui/es'
import { defineComponent, ref} from 'vue'

import TestItem from '@/components/MyTestPage/src/TestItem.vue'
import { getExamByExamCodeAction } from '@/services/getExams'

export default defineComponent({
  setup() {
    const examCode = ref(null)
    const message = useMessage()
    let data = ref({})
    const  queryExam=async ()=>{
      if(examCode.value===null){
        message.error("请输入考试号码")
      }else{
         data= await getExamByExamCodeAction(examCode.value)
         console.log("执行")
         if(Object.keys(data.value).length == 0){
           message.error("未找到该场考试")
         }else{
           message.success("成功查询到该场考试")
         }
      }
    }
    return {
      examCode,
      queryExam,
      showModal: ref(false)
    }
  },
  components:{
    TestItem
  }
})
</script>

<style scoped lang="css">
.join-test {
}
.n-card {
  width: 737px;
  height: 327px;
  border-radius: 20px;
  margin: 0 auto;
}
.title {
  font-weight: 700;
  font-size: 24px;
  color: rgb(16, 16, 16);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 36px;
  padding-bottom: 40px;
}
.n-button {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 117px;
  height: 53px;
  border-radius: 10px;
  font-size: 18px;
}
</style>
