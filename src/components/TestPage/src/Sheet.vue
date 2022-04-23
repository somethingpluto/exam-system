answerStore, import { questionListStore } from '@/store'
<template>
  <div class='sheet'>
    <n-card>
      <div class='header'>
        <span class='title'>答题卡</span>
        <span class='button'>
          <n-button @click='showModal = true' type='primary'>交卷</n-button>
          <n-modal
            v-model:show='showModal'
            :mask-closable='false'
            preset='dialog'
            title='确认'
            content='请确认交卷,交卷后答案无法修改'
            positive-text='确认交卷'
            negative-text='再检查检查'
            @positive-click='onPositiveClick'
            @negative-click='onNegativeClick'
          />
        </span>
      </div>
      <div class='body'>
        <div
          class='completion-status'
          :class="answered[index] === undefined ? '' : 'choosed'"
          v-for="(value,index) in numbers"
          :key='index + 1'
          @click="scrollInToQuestion(index + 1 + '')"
        >
          {{ index + 1 }}
        </div>
      </div>
    </n-card>
  </div>
</template>

<script lang='ts'>
import { useMessage } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import { router } from '@/router';
import { answerStore, examInfoStore, questionListStore } from '@/store';

export default defineComponent({
  setup() {
    const message = useMessage();
    const showModalRef = ref(false);
    const examInfo = examInfoStore();
    // 1.确认交卷
    const onPositiveClick = async () => {
      // 发送试卷内容
      message.success('交卷成功!快去看看大家对这次考试的看法吧~');
      router.push({ path: `/mytest/complete/${examInfo.examInfo.paperId}` });
    };

    // 2.取消交卷
    const onNegativeClick = () => {
      message.warning('沉稳，细心，定能取得好成绩!');
    };

    // 3.获取该场考试信息
    const numbers = ref<any>({});
    const questionList = questionListStore();
    setTimeout(() => {
      numbers.value = questionList.questionList;
    }, 400);

    const store = answerStore();
    const answered = store.answerList;

    const scrollInToQuestion = (id: string) => {
      console.log(id);
      const ele = document.getElementById(id);
      ele?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return {
      scrollInToQuestion,
      showModal: showModalRef,
      onNegativeClick,
      onPositiveClick,
      numbers,
      answered,
    };
  },
});
</script>

<style scoped lang='css'>
.sheet {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  position: fixed;
}

.n-card {
  width: 320px;
  height: auto;
  max-height: 800px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 15px;
  overflow: hidden;
}

.title {
  font-size: 20px;
  color: rgb(16, 16, 16);
  line-height: 29px;
  text-align: center;
  line-height: 41px;
}

.n-button {
  width: 86px;
  height: 41px;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
  line-height: 26px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.completion-status {
  display: inline-block;
  width: 47px;
  height: 47px;
  font-size: 16px;
  text-align: center;
  line-height: 47px;
  margin: 7px;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid black;
}

.body {
  margin-top: 20px;
}

.choosed {
  background: rgb(54, 173, 106);
}
</style>
