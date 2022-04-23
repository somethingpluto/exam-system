<template>
  <div class='test-header'>
    <div class='exam-title'>计算机网络</div>
    <div class='time-box'>
      <div class='count-Down'>
        <Icon size='24px' class='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 24 24'
          >
            <path
              d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z'
              fill='currentColor'
            ></path>
          </svg>
        </Icon>
        <div v-if='isShowTime'>
          {{ minutes }} : {{ secondes < 10 ? '0' + secondes : secondes }}
        </div>
        <div v-else>查看时间</div>
        <n-switch v-model:value='isShowTime'></n-switch>
      </div>
    </div>

    <div class='student-name'>{{ name }}</div>
  </div>
</template>

<script lang='ts'>
import { Icon } from '@vicons/utils';
import { useMessage } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import { examInfoStore, userInfoStore } from '@/store';

export default defineComponent({
  setup() {
    const message = useMessage();
    const userStore = userInfoStore();
    const name = userStore.userInfo.studentName;

    const examStore = examInfoStore();
    const exam = examStore.examInfo.source;

    const isShowTime = ref(true);

    const examTime = ref(120 * 60 + 5);
    const minutes = ref(0);
    const secondes = ref(0);
    setInterval(() => {
      examTime.value--;
      minutes.value = parseInt(examTime.value / 60 + '');
      secondes.value = examTime.value % 60;
    }, 1000);

    return {
      name,
      exam,
      minutes,
      secondes,
      isShowTime,
    };
  },
  components: {
    Icon,
  },
});
</script>

<style scoped lang='css'>
.test-header {
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 24px;
  text-align: center;
}

.exam-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
}

.student-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
}

.count-Down {
  width: 180px;
  display: flex;
  justify-content: center;
  color: black;
}

.icon {
  padding-right: 3px;
  padding-top: 6px;
}

.n-switch {
  margin-left: 4px;
  padding-top: 6px;
}
.time-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
