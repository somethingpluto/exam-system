import { useLocalStorage } from '@vueuse/core';
import { createPinia, defineStore } from 'pinia';
import { computed } from 'vue';

const pinia = createPinia();

export default pinia;

/**
 * token 的本地存储
 */
export const useTokenStore = defineStore('token', () => {
  const value = useLocalStorage('exam-token', '');
  const clear = () => value.value = '';
  const has = computed(() => value.value !== '');
  return { value, clear, has };
}).bind(undefined, pinia);

export const userInfoStore = defineStore('user', () => {
  const userInfo = useLocalStorage('userInfo', {studentId:''});
  const clear = () => userInfo.value = {studentId:''};
  const has = computed(() => userInfo.value);
  return { userInfo, clear, has };
});

export const examListStore = defineStore('examList', () => {
    const value = useLocalStorage('examList', []);
    const clear = () => value.value = [];
    const has = computed(() => value.value != []);
    return { value, clear, has };
  },
).bind(undefined, pinia);

// export const examInfoStore = defineStore('examInfo', {
//   state: () => {
//     return {
//       examInfo: {
//         source: '',
//         examDate: '',
//         paperId: 0,
//         examCode:0
//       },
//     };
//   },
// });
export const examInfoStore = defineStore('examInfo',()=>{
  const examInfo=useLocalStorage("examInfo",{})
  const clear = ()=>examInfo.value={}
  const has = computed(()=>examInfo.value !={})
  return {examInfo,clear,has}
}).bind(undefined,pinia)

/**
 *
 */
export const questionListStore = defineStore('questionList', () => {
  const questionList = useLocalStorage('questionList', {});
  const clear = () => questionList.value = {};
  const has = computed(() => questionList.value != {});
  return { questionList, clear, has };
}).bind(undefined, pinia);

export const answerStore = defineStore('answer', () => {
  const answerList = useLocalStorage('answerList', []);
  const clear = () => answerList.value = [];
  const has = computed(() => answerList.value != []);
  return { answerList, clear, has };
}).bind(undefined, pinia);
