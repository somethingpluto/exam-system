
<template>
  <div class="question-item" :id="id + ''">
    <n-card>
      <div class="question-title">{{ id }}、{{ question.question }}</div>
      <n-radio-group v-model:value="option" :name="question.questionId + ''">
        <div class="question-options">
          <div class="option">
            <n-radio-button @click="chooseAnswer('A')" value="A">
              A
            </n-radio-button>
            <span class="option-describe">{{ question.answerA }}</span>
          </div>

          <div class="option">
            <n-radio-button @click="chooseAnswer('B')" value="B">
              B
            </n-radio-button>
            <span class="option-describe">{{ question.answerB }}</span>
          </div>

          <div class="option">
            <n-radio-button @click="chooseAnswer('C')" value="C">
              C
            </n-radio-button>
            <span class="option-describe">{{ question.answerC }}</span>
          </div>

          <div class="option">
            <n-radio-button @click="chooseAnswer('D')" value="D">
              D
            </n-radio-button>
            <span class="option-describe">{{ question.answerD }}</span>
          </div>
        </div>
      </n-radio-group>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { answerStore } from '@/store'

export default defineComponent({
  props:{
    id:{
      type:Number,
      required:true
    },
    question:{
      type:Object,
      required:true
    },
    choosed:{
      type:String,
    }
  },

    setup (props) {
      const option = ref(props.choosed)
      const id= props.id
      const store = answerStore()
      const answerList = store.answerList as any

      const chooseAnswer=(option:string)=>{
        console.log(option,id)
        answerList[id-1]=option
        console.log(store.answerList)
      }
    return {
      option,
      chooseAnswer
    }
  }
})
</script>

<style scoped lang="css">
.question-item {
  margin-top: 15px;
  width: 919px;
  height: 300px;
  margin-left: auto;
}
.n-card {
  width: 919px;
  height: 290px;
  margin-left: auto;
  border-radius: 20px;
}
.question-options {
  display: flex;
  flex-direction: column;
}
.option {
  margin-top: 15px;
  margin-bottom: 15px;
}
.question-title {
  font-size: 18px;
}
.option-describe {
  font-size: 16px;
  margin-left: 10px;
}
.choose {
  background-color: blue;
}
.n-radio-button {
  border: 1px solid black;
  border-left: 1px solid black;
  border-radius: 3px;
  --button-box-shadow-focus: 0 !important;
}
.n-radio-button:first-child {
  border-left: 1px solid black;
}
.n-radio-group {
  border-radius: 3px;
}
.n-radio-button.n-radio-button--checked {
  background-color: rgba(24, 160, 88, 0.9);
  color: black;
  border: 1px solid black;
}

</style>
