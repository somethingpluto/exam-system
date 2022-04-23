<template>
  <div class="edit">
    <!--      试卷大纲-->
    <div class="content">
      <div class="paper-outline">
        <n-card class="outline-card">
          <div class="title">
            <div
              class="outline"
              :class="nowtTab === 'outline' ? 'active' : ''"
              @click="changeTab('outline')"
            >
              试卷大纲
            </div>
            <div
              class="type-choose"
              :class="nowtTab === 'type' ? 'active' : ''"
              @click="changeTab('type')"
            >
              题型选择
            </div>
          </div>
          <template v-if="nowtTab === 'outline'">
            <div class="detail">
              <h2>一、单选题</h2>
              <template v-for="(item,index) in radioList">
                <div @click="toPlace(item.id)">
                  {{ index + 1 }}、{{ item.question }}
                </div>
              </template>
              <h2>二、判断题</h2>
              <template v-for="(item,index) in judgeList">
                <div @click="toPlace(item.id)">
                  {{ index + 1 }}、{{ item.question }}
                </div>
              </template>
              <h2>三、主观题</h2>
            </div>
          </template>
          <template v-if="nowtTab === 'type'">
            <h2 @click="toPlace('radio')">一、单项选择题</h2>
            <h2 @click="toPlace('judge')">二、判断题</h2>
            <h2>三、主观题</h2>
          </template>
        </n-card>
      </div>
      <!--     试题选择-->
      <div class="question">
        <div class="question-type radio" id="radio">
          <n-card>
            <h2>一、单项选择题</h2>
          </n-card>
          <!--        单项选择题-->
          <template
            v-for="(question,index) in list[1]"
            :key="question.questionId"
          >
            <QuestionItemRadio
              @choose="chooseRadio"
              @noChoose="noChooseRadio"
              :questionItem="question"
              :index="index + ''"
            ></QuestionItemRadio>
          </template>
        </div>
        <div class="question-type judge" id="judge">
          <n-card>
            <h2>二、判断题</h2>
          </n-card>
          <template
            v-for="(question,index) in list[3]"
            :key="question.questionId"
          >
            <QuestionItemJudge
              @choose="chooseJudge"
              @noChoose="noChooseJudge"
              :questionItem="question"
              :index="index + ''"
            ></QuestionItemJudge>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import QuestionItemJudge from '@/components/PaperManagePage/PaperEdit/QuestionItemJudge.vue';
import QuestionItemRadio from '@/components/PaperManagePage/PaperEdit/QuestionItemRadio.vue';
import {getEditQuestionAction} from '@/services/getQuestions';
import { questionListStore } from '@/store';
import { errorMsg, successMsg } from '@/utils/message';

export default defineComponent({
  components: { QuestionItemRadio, QuestionItemJudge },
  setup() {
    const questionStore = questionListStore();
    const questionList = ref<any>({});

    const nowtTab = ref('outline');
    const changeTab = (tab: string) => {
      nowtTab.value = tab;
    };
    // 根据序号经行试题跳转
    const toPlace = (id: string) => {
      const ele = document.getElementById(id);
      ele?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    setTimeout(() => {
      questionList.value = questionStore.questionList;
    }, 400);
    console.log(questionList.value);

    // 获取试题
    const loading = async () => {
      let isGet = await getEditQuestionAction(1001);
      if (isGet) {
        successMsg("获取试题成功")
      } else {
        errorMsg("获取试题失败")
      }
    };

    // let list = computed(() => {
    //   console.log(questionList.value);
    //   return questionList.value;
    // });
    onMounted(loading);

    // 单选题
    const radioList = ref<any>([]);
    // 选择试题
    const chooseRadio = (value: any) => {
      radioList.value.push(value);
      console.log(radioList.value);
    };
    // 删除试题
    const noChooseRadio = (value: any) => {
      console.log('删除');
      radioList.value = radioList.value.filter((item: any) => {
        return item.id != value.id;
      });
    };
    // 判断题
    const judgeList = ref<any>([])
    // 选择试题
    const chooseJudge=(value:any)=>{
      judgeList.value.push(value)
      console.log(judgeList.value)
    }
    // 删除试题
    const noChooseJudge=(value:any)=>{
      judgeList.value=judgeList.value.filter((item:any)=>{
        return item.id !=value.id;
      })
    }

    return {
      list:questionList,
      nowtTab,
      changeTab,
      toPlace,
      chooseRadio,
      noChooseRadio,
      chooseJudge,
      noChooseJudge,
      radioList,
      judgeList
    };
  },
});
</script>

<style scoped lang="css">
.edit {
  height: auto;
  display: flex;
  width: 100%;
  margin: 0 auto;
}

.paper-outline {
  flex: 1;
}

.paper-outline > .n-card {
  margin-top: 20px;
  width: 290px;
  min-height: 630px;
  height: auto;
  border-radius: 20px;
}

.title {
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  font-weight: bold;
}

.active {
  color: #2080f0;
}

.question {
  flex: 5;
}

.question-type {
  margin-top: 20px;
}

.question-type > .n-card {
  width: 690px;
  border-radius: 20px;
  height: 110px;
}

.question {
  margin-left: 20px;
}

.question-kind {
  font-size: 22px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.question-detail {
  text-align: left;
  height: 22px;
  line-height: 22px;
  text-indent: 4px;
}

.outline {
  cursor: pointer;
}

.type-choose {
  cursor: pointer;
}

h1 {
  cursor: pointer;
}
.outline-card {
  width: 100px;
}
.content {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
</style>
