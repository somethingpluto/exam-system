<template>
  <n-card hoverable @click="changeToTest">
    <div class="test-item">
      <div class="basic-info">
        <div class="test-name">{{ examInfo.source }}</div>
        <div class="grade-time">
          <span>
            <icon size="12px" color="black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                  fill="currentColor"
                ></path>
              </svg>
            </icon>
            {{ examInfo.grade }}级
          </span>
          <span>
            <icon size="12px" color="black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                  fill="currentColor"
                ></path>
              </svg>
            </icon>
            {{ examInfo.examDate }}
          </span>
        </div>
      </div>
      <div class="day-info">
        <span class="day-unfinished">{{ days < 0 ? '已结束' : days }}</span>
        <span v-if="days>0" style="font-size: 16px">天</span>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts">
import {Icon} from '@vicons/utils'
import {  computed,defineComponent } from 'vue'

import { router } from '@/router'
import { examInfoStore } from '@/store'
import { formatDate } from '@/utils/datetime'

export default defineComponent({
  props:{
    examInfo:{
      type:Object,
      required:true
    }
  },
  setup(props) {
    //
    const store = examInfoStore()
    //

    //
    const days=computed(()=>{
      const date = new Date()
      const nowDate = Date.parse(formatDate(date.getTime()))
      const endDate = Date.parse(props.examInfo.examDate)
      const days= (endDate-nowDate)/(1*24*60*60*1000)
      return days
    })
    console.log(props.examInfo)
    const changeToTest=()=>{
      store.examInfo.source=props.examInfo.source
      store.examInfo.examDate=props.examInfo.examDate
      store.examInfo.paperId= props.examInfo.paperId
      router.push({path:`/mytest/entertest/${store.examInfo.paperId}`})
    }
    return {
      changeToTest,
      days
    }
  },
  components:{
    Icon
  }
})
</script>

<style scoped lang="css">
.n-card {
  margin-bottom: 10px;
  margin-top: 10px;
}

.test-item {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.basic-info {
  width: 320px;
}

.test-name {
  text-align: left;
  font-weight: 400;
  font-size: 36px;
  color: rgb(16, 16, 16);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 52px;
  padding-bottom: 30px;
}
.grade-time {
  display: flex;
  justify-content: space-between;
}

.grade-time:nth-child(1) {
  font-weight: 400;
  font-size: 14px;
  color: rgb(114, 114, 114);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 20px;
  margin-left: 10px;
}

.grade-time:nth-child(2) {
  font-weight: 400;
  font-size: 14px;
  color: rgba(114, 114, 114, 1);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 20px;
}
.day-unfinished {
  font-weight: 400;
  font-size: 30px;
  color: rgba(25, 138, 250, 1);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 104px;
}

.n-card:hover {
  border: 0.5px solid rgba(64, 152, 252, 0.7);
}
</style>
