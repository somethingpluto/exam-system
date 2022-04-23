<template>
  <div class="question">
    <template v-if="load">
      <div class="load">
        <n-spin size="large">
          <n-alert title="" type="success">您的考试正在赶来的路上</n-alert>
        </n-spin>
      </div>
    </template>
    <template v-else v-for="(question,index) in list" :key="index">
      <Question-item
        :id="index + 1"
        :question="question"
        :choosed="answerList[index]"
      ></Question-item>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import getQuestionAction from '@/services/getQuestions'
import { answerStore, examInfoStore, questionListStore } from '@/store';

import QuestionItem from './QuestionItem.vue'

export default defineComponent({
  components: {QuestionItem},

  setup(){


    const load = ref(true)
    // 考试信息
    const exam = examInfoStore()
    const paperId = exam.examInfo.paperId
    // 学生作答结果
    const answer = answerStore()
    const answerList = answer.answerList
    // 题目列表
    const questionList = questionListStore()

    const list = ref<any>({})
    const loading =async ()=>{
      await getQuestionAction(paperId)
    }
    setTimeout(()=>{
      list.value=questionList.questionList
      load.value=false
    },400)
    onMounted(loading)
    return{
      load,
      questionList,
      answerList,
      list
    }
  }
})
</script>

<style scoped lang="css">
.question {
  height: 100%;
}
.load {
  width: 919px;
  margin-left: auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
