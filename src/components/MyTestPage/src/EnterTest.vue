<template>
  <div class="enter-test" @enterTest="enterTest">
    <div>
      <n-card>
        <div class="title">{{ examName }}</div>
        <div class="time">{{ examDate }}</div>
        <div class="test-things">
          <div class="test-title">考试要求</div>
          <div class="test-info">
            考试纪律要求为了保证考试的良好秩序，全面反映每位同学的学习情况，杜绝考试违纪
            现象，严肃考试纪律
            <br />
            提出以下几点考试纪律要求：
            <br />
            1、考生在每科开考前 5—10 分钟进入考场，并按规定位置就座，不得随意
            变动；
            <br />
            2、考生进入考场只准带规定允许的文具，其他物品一律集中放在指定位置；
            <br />
            3、特别强调：考生不得带通讯工具（计算器等）入考场；
            <br />
            4、不准夹带、偷看、抄袭或有意让他人抄袭，不准接传答案或者交换答卷；不准交头接耳、左顾右盼；
            <br />
            5、考生在考场内必须保持安静，考试时严格遵守考试时间，考试中途不得,离开考场，考试结束时方可交卷，不得提前交卷。
            <br />
            6、交卷的学生要远离考场，不得影响其他学生答卷。
          </div>
        </div>
        <div class="button">
          <n-button type="info" :disabled="enter" @click="enterTest">
            进入考试
            <span v-if="time >= 0">({{ time }})</span>
          </n-button>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, ref } from 'vue'

import { router } from '@/router/router'
import { examInfoStore } from '@/store'

export default defineComponent({
  setup() {
    const message = useMessage()
    const enter=ref(true)
    const store = examInfoStore()
    const examName = ref(store.examInfo.source)
    const examDate= ref(store.examInfo.examDate)

    message.success(`欢迎参加${examName.value}考试`)

    const enterTest=(exam:any)=>{
      examName.value=exam.source
      examDate.value=exam.date
      router.push({path:`/test/${store.examInfo.paperId}`})
    }
    const time = ref(1)
    setInterval(()=>{
      time.value--;
      if(time.value === 0){
        enter.value=false
      }
    },1000)
    return {
      enterTest,
      examName,
      examDate,
      enter,
      time
    }
  }
})
</script>

<style scoped lang="css">
.enter-test {
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 20px;
}
.n-card {
  width: 1000px;
  min-height: 553px;
  border-radius: 20px;
  margin: 0 auto;
}

.title {
  font-weight: 400;
  font-size: 36px;
  color: rgb(16, 16, 16);
  line-height: 52px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.time {
  font-size: 14px;
  color: rgba(114, 114, 114, 1);
  font-style: normal;
  line-height: 20px;
  text-align: center;
}
.test-things {
  width: 900px;
  height: 340px;
  background-color: rgba(87, 87, 87, 0.06);
  border-style: none;
  border-color: unset;
  color: rgb(114, 114, 114);
  border-radius: 20px;
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
}
.n-button {
  height: 100%;
  width: 100%;
  font-size: 18px;
  border-radius: 10px;
}
.button {
  padding-top: 15px;
  width: 216px;
  height: 54px;
  margin: 0 auto;
}
.test-title {
  text-align: center;
  padding-top: 8px;
  font-size: 28px;
  color: black;
}

.test-info {
  text-align: left;
  padding: 20px;
}
</style>
