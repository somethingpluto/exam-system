<template>
  <div class="paper-manage">
    <div class="title">
      <div class="select-box">全部科目</div>
      <div class="serach-box">
        <n-input size="medium"></n-input>
      </div>
    </div>
    <div class="card">
      <n-card>
        <div class="paper-info" @click="changeToDetail">
          <div class="info">
            <div class="paper-name">2019级线上测试数学试卷</div>
            <div class="last-change">上次修改于 昨天</div>
          </div>
          <div class="operation">
            <n-button type="error" size="large">删除</n-button>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { router } from '@/router'

export default defineComponent({
  setup() {

    const changeToDetail=()=>{
      router.push('/papermanage/detail')
    }

    return {
      changeToDetail
    }
  }
})
</script>

<style scoped lang="css">
.paper-manage {
  height: 100%;
  width: 60%;
  margin: 0 auto;
}
.title {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.select-box {
  width: 228px;
  height: 53px;
  border-radius: 20px;
  background: #ffffff;
  text-align: center;
  font-size: 16px;
  line-height: 53px;
}
.serach-box {
  text-align: center;
}
.n-input {
  margin: 0 auto;
  width: 290px;
  height: 52px;
  border-style: none;
  border-color: unset;
  color: rgb(136, 136, 136);
  border-radius: 36px;
  font-size: 16px;
  padding: 10px;
}
.card {
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.n-card {
  width: 100%;
  min-height: 317px;
  height: auto;
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 0;
}
.paper-info {
  display: flex;
  justify-content: space-around;
  height: 88px;
}
.info {
  flex: 3;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
}
.operation {
  flex: 1;
  border: 1px solid #e8e8e8;
  text-align: center;
  padding: 20px;
}
.paper-name {
  flex: 2;
  font-size: 24px;
  text-align: left;
  padding-left: 10px;
  padding-top: 15px;
}
.last-change {
  flex: 1;
  text-align: left;
  padding-left: 10px;
  font-size: 14px;
  color: #727272;
}
.n-button {
  width: 90px;
  height: 40px;
}
</style>
