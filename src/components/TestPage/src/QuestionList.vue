, questionListStore, ref
<template>
  <div class="question-list">
    <div class="question">
      <Question />
    </div>
    <div class="sheet">
      <Sheet />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Question from '@/components/TestPage/src/Question.vue'
import Sheet from '@/components/TestPage/src/Sheet.vue'


export default defineComponent({
  components:{
    Question,
    Sheet
  },
  setup() {
   
    return {
    }
  }
})
</script>

<style scoped lang="css">
.question-list {
  min-height: 811px;
  height: auto;
  background-color: rgb(235, 235, 235);
  display: flex;
  justify-content: space-around;
}
.question {
  flex: 2.5;
  display: flex;
  flex-direction: column;
}
.sheet {
  flex: 1;
}
</style>
