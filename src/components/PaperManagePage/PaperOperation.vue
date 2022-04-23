<template>
  <div class="paper-operation">
    <div class="header">
      <div class="info">
        <div class="test-name">2019级线上数学测试</div>
        <div class="preview active">预览</div>
      </div>
      <div class="choose">
        <div class="operation-guide active">操作向导</div>
        <div class="question-manage">问题管理</div>
        <div class="settings">设置</div>
      </div>
    </div>

    <div class="card">
      <n-card>
        <div class="title">操作向导</div>
        <div class="operation">
          <template v-for="item in operationItems" :key="item.id">
            <div class="operation-card" @click="item.method">
              <div class="icon">
                <Icon size="100px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88v48z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Icon>
              </div>
              <div class="operation-name">{{ item.handle }}</div>
              <div class="operation-describe">{{ item.describe }}</div>
            </div>
          </template>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from '@vicons/utils'
import { defineComponent, ref } from 'vue'

import { router } from '@/router'

export default defineComponent({
  setup() {
    const operation=[
      {
        id:1,
        handle:'编辑题目',
        describe:'编辑这张试卷的题目',
        method:()=>{
          router.push('/paperedit')
        }
      },
      {
        id:2,
        handle:'分享试卷',
        describe:'将这张试卷分享给其他老师'
      },
      {
        id:3,
        handle:'导出试卷',
        describe:'导出这张试卷到word'
      }
    ]

    const operationItems= ref(operation)

    return {
      operationItems
    }
  },
  components:{
    Icon
  }
})
</script>

<style scoped lang="css">
.paper-operation {
  width: 100%;
}
.header {
  width: 100%;
  height: 78px;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
}
.info {
  display: flex;
  padding-left: 80px;
  text-align: center;
  line-height: 78px;
}
.test-name {
  font-size: 24px;
  padding-right: 20px;
}
.preview {
  font-size: 20px;
}
.choose {
  display: flex;
  justify-content: space-around;
  padding-right: 80px;
}
.operation-guide,
.question-manage,
.settings {
  flex: 1;
  font-size: 20px;
  width: 100px;
  height: 100%;
  line-height: 78px;
}
.active {
  color: rgb(25, 138, 250);
  font-weight: 700;
}
.card {
  margin-top: 20px;
}

.n-card {
  width: 1239px;
  min-height: 580px;
  height: auto;
  border-radius: 20px;
  margin: 0 auto;
}

.title {
  height: 26px;
  line-height: 26px;
  font-size: 24px;
  margin-bottom: 20px;
}

.operation {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.operation-card {
  margin: 10px 20px 10px 0px;
  width: 277px;
  height: 230px;
  background-color: rgba(87, 87, 87, 0.06);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon {
  padding-top: 20px;
  text-align: center;
  flex: 4;
}
.operation-name {
  line-height: 53px;
  text-align: center;
  font-size: 28px;
  color: rgb(16, 16, 16);
  flex: 1.5;
}
.operation-describe {
  text-align: center;
  font-size: 14px;
  color: rgb(114, 114, 114);
  flex: 1;
}
</style>
