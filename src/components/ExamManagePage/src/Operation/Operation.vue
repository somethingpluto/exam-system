<template>
  <div class="detail-operation">
    <div class="card">
      <n-card>
        <div class="title">操作向导 {{ name }}</div>
        <div class="operations">
          <!--          编辑题目-->
          <div class="operation">
            <div class="operation-card" @click="edit.method">
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
              <div class="operation-name">{{ edit.handle }}</div>
              <div class="operation-describe">{{ edit.describe }}</div>
            </div>
          </div>
          <!--          试卷分析-->
          <div class="operation">
            <div class="operation-card" @click="analyse.method">
              <div class="icon">
                <Icon size="120px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                  >
                    <path d="M2 26h28v2H2z" fill="currentColor"></path>
                    <path
                      d="M24 23h-4a2.002 2.002 0 0 1-2-2v-7a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2v7a2.002 2.002 0 0 1-2 2zm-4-9v7h4.001L24 14z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 23H8a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2v15a2.002 2.002 0 0 1-2 2zM8 6v15h4.001L12 6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Icon>
              </div>
              <div class="operation-name">{{ analyse.handle }}</div>
              <div class="operation-describe">{{ analyse.describe }}</div>
            </div>
          </div>
          <!--          监考-->
          <div class="operation">
            <div class="operation-card" @click="supervise.method">
              <div class="icon">
                <Icon size="120px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M12 16a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm0-8a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11zm-4 5.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0zM2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582V13a9 9 0 1 1-18 0V6.832A1.75 1.75 0 0 1 2 5.25v-1.5zM4.5 7v6a7.5 7.5 0 1 0 15 0V7h-15zm-.75-3.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25H3.75z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </Icon>
              </div>
              <div class="operation-name">{{ supervise.handle }}</div>
              <div class="operation-describe">{{ supervise.describe }}</div>
            </div>
          </div>
          <!--          阅卷-->
          <div class="operation">
            <div class="operation-card" @click="marking.method">
              <div class="icon">
                <Icon size="120px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Icon>
              </div>
              <div class="operation-name">{{ marking.handle }}</div>
              <div class="operation-describe">{{ marking.describe }}</div>
            </div>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from '@vicons/utils';
import { defineComponent, ref } from 'vue';

import { router } from '@/router';
import { examInfoStore } from '@/store';

export default defineComponent({
  setup() {

    const store = examInfoStore()
    const name = examInfoStore.source
    const edit = {
      id: 1,
      handle: '编辑题目',
      describe: '编辑这张试卷的题目',
      method: () => {
        router.push('/paperedit');
      },
    };
    const analyse = {
      id: 2,
      handle: '试卷分析',
      describe: '查看该场考试数据',
      method:()=>{
        router.push('/analyse')
      }
    };
    const supervise = {
      id: 3,
      handle: '监考',
      describe: '查看做题情况',
      method: () => {
        router.push("/exammanage/monitor/1001");
      },
    };
    const marking = {
      id: 4,
      handle: '阅卷',
      describe: '评阅主观题的分数',
      method: () => {
        router.push('/exammanage/operation/marking');
      },
    };
    return {
      edit,
      analyse,
      supervise,
      marking,
      name
    };
  },

  components: {
    Icon,
  },
});
</script>

<style scoped lang="css">
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

.operations {
  display: flex;
}
</style>
