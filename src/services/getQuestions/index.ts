import { createService } from '@/http';
import { questionListStore } from '@/store';

import { IQuestionRes } from './type';

const { defineAPI } = createService();
const store = questionListStore();

/**
 * 根据试卷Id获取试卷题目
 * @param id
 */
export default async function getQuestionAction(id: number) {
  const getQuestion = defineAPI<IQuestionRes>('GET', `/paper/${id}`);
  let result: any;
  await getQuestion().then((data) => {
    result = data;
    console.log('考试题目');
    console.log(data)
    store.questionList = data.data["1"];
  });
  return result
}

export  async function getEditQuestionAction(id: number) {
  const getQuestion = defineAPI<IQuestionRes>('GET', `/paper/${id}`);
  let result: any;
  await getQuestion().then((data) => {
    result = data;
    console.log('考试题目');
    console.log(data)
    store.questionList = data.data;
  });
  return result
}