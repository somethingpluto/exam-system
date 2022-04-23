<template>
  <div class="edit">
    <div class="paper-outline">
      <n-card class='sider'>
        <div class="title">
          <div class="outline">试卷大纲</div>
          <div class="type-choose">题型选择</div>
        </div>
        <div class="detail">
          <h2>一.单选题</h2>
          <ol>
            <li>xxxxxxx</li>
          </ol>
        </div>
      </n-card>
    </div>
    <div class="question">
      <div class="question-type">
        <n-card>
          <div class="type">一.单选题</div>
          <div class="describe">
            每个题有四个选项，从ABCD中选出符合题目的最佳选项。
          </div>
        </n-card>
      </div>
      <div class="question-edit">
        <template v-for="i in 9" :key="i">
          <div class="question-item">
            <n-card class="card">
              <div class="item-header">
                <div class="item-header-title">
                  <div class="info">1.xxxxxxxxxxx</div>
                  <div class="operation">编辑题目</div>
                </div>
                <dir class="item-header-score-type">
                  <div></div>
                  <div class="item-score">5</div>
                  分
                  <div class="item-type">单选</div>
                </dir>
              </div>

              <div class="options">
                <n-radio-group name="radiogroup">
                  <div
                    v-for="item in options"
                    :key="item.option"
                    class="option"
                  >
                    <n-radio :value="item.option" size="large">
                      {{ item.value }}
                    </n-radio>
                  </div>
                </n-radio-group>
              </div>
              <h3>正确答案C</h3>
              <h3>解析</h3>
              <h3>xxxxxxxxxx</h3>
            </n-card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options=ref([
      {
        option:"A",
        value:'A.xxxxxxxxxx',
        name:"answer"
      },
      {
        option:'B',
        value:'B.xxxxxx',
        name:"answer"
      },
      {
        option:'C',
        value:'C.xxxxxxx',
        name:"answer"
      },
      {
        option:'D',
        value:'D.xxxxx',
        name:"answer"
      }
    ])


    return {
      options
    }
  }
})
</script>

<style scoped lang="css">
.edit {
  height: auto;
  display: flex;
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.paper-outline {
  flex: 1;
}
.paper-outline {
  flex: 3;
}
.paper-outline > .n-card {
  margin-top: 20px;
  margin-left: 80px;
  width: 319px;
  min-height: 630px;
  height: auto;
  border-radius: 20px;
}
.question-type > .n-card {
  width: 900px;
  height: 132px;
  border-radius: 20px;
  margin-top: 20px;
}
.type {
  margin-top: 10px;
  font-size: 20px;
  color: rgb(16, 16, 16);
}
.describe {
  margin-top: 15px;
  font-size: 20px;
  color: rgba(114, 114, 114, 1);
}
.question-item {
  width: 900px;
  height: 388px;
  border-style: none;
  border-color: unset;
  margin-bottom: 20px;
}

.question-item > .n-card {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding-bottom: 0px;
}

.title {
  display: flex;
  justify-content: space-around;
}
.outline {
  font-size: 24px;
  color: rgb(25, 138, 250);
}
.type-choose {
  font-size: 24px;
  color: rgb(16, 16, 16);
}
ol {
  padding-left: 20px;
}
li {
  font-size: 20px;
}
.item-header {
  display: flex;
  justify-content: space-between;
}
.item-header-title {
  display: flex;
  justify-content: space-between;
  line-height: 61px;
}
.info {
  font-size: 20px;
  color: rgb(16, 16, 16);
}
.operation {
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
  color: rgb(25, 138, 250);
}
.item-header-score-type {
  width: 200px;
  display: flex;
  justify-content: space-around;
  line-height: 31px;
}
.item-score {
  width: 70px;
  height: 31px;
  background-color: rgb(255, 255, 255);
  border-color: rgb(187, 187, 187);
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-size: 18px;
  padding: 0px;
  text-align: center;
}
.item-type {
  margin-left: 20px;
  width: 70px;
  height: 31px;
  background-color: rgba(0, 0, 0, 0.05);
  border-color: rgb(187, 187, 187);
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 0px;
  text-align: center;
}
.option {
  height: 40px;
}
.n-radio {
  font-size: 18px;
}
.question {
  height: auto;
}
.card {
  padding-bottom: 0px !important;
}
.sider{
  position: fixed;
  top: 50px;
}
</style>
