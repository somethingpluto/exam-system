<template>
  <div class="question-item" :id="questionItem.questionId">
    <n-card class="card">
      <div class="item-header">
        <!--        题目描述 分值 类型-->
        <div class="item-header-title">
          <div class="info">
            {{ parseInt(index) + 1 }}、{{ questionItem.question }}
          </div>
          <div class="item-header-score-type">
            <div class="item-score">
              <n-input :placeholder="questionItem.score"></n-input>
              分
            </div>
            <div class="item-type">
              {{ questionItem.level === '2' ? '单选' : '' }}
            </div>
            <div class="choose">
              <n-switch v-model:value="isChoose" />
            </div>
          </div>
        </div>
      </div>
      <!--      题目选项-->
      <div class="options">
        <n-radio-group
          v-model:value="answer"
          :name="questionItem.questionId + ''"
        >
          <div class="option">
            <n-radio value="A">A{{ questionItem.answerA }}</n-radio>
          </div>

          <div class="option">
            <n-radio value="B">B{{ questionItem.answerB }}</n-radio>
          </div>

          <div class="option">
            <n-radio value="C">C{{ questionItem.answerC }}</n-radio>
          </div>

          <div class="option">
            <n-radio value="D">D{{ questionItem.answerD }}</n-radio>
          </div>
        </n-radio-group>
      </div>
      <h3>正确答案 {{ answer }}</h3>
      <h3>解析</h3>
      <div clss="analysis">
        <n-input
          :placeholder="questionItem.analysis === null ? '暂无' : ''"
        ></n-input>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'QuestionItem',
  props:{
    questionItem:{
      type:Object,
      required:true
    },
    index:{
      type:String,
      required: true
    }
  },
  emits:["choose","noChoose"],
  setup(props,{emit}) {
    const rightAnswer =ref(props.questionItem.rightAnswer)
    const isChoose = ref(false)

    watch(isChoose,()=>{
      if (isChoose.value === true){
        emit("choose",{id:props.questionItem.questionId, question:props.questionItem.question})
      }else {
        emit("noChoose",{id:props.questionItem.questionId})
      }
    })
    const answer = ref(props.questionItem.rightAnswer)
    return {
      rightAnswer,
      isChoose,
      answer
    };
  },

});
</script>

<style scoped>
.card {
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.item-header-title {
  display: flex;
  justify-content: space-between;
}

.item-header-score-type {
  display: flex;
}
.options {
  margin-top: 20px;
}
.option {
  margin-top: 10px;
}
.n-radio {
  font-size: 18px;
}
.info {
  font-size: 20px;
  font-weight: bold;
}
.item-score {
  width: 60px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
  display: flex;
  height: 30px;
  justify-content: space-between;
}
.item-type {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #ebebeb;
}
.choose {
  width: 50px;
  text-align: center;
}
.item-score > .n-input {
  width: 40px;
}
.analysis {
  width: 100%;
}
</style>
