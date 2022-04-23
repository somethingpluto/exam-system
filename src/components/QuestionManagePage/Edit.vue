<template>
  <div class="edit">
    <div>
      <n-card>
        <div class="header">
          <div class="header-title">编辑单选题</div>
          <n-button type="info">保存题目</n-button>
        </div>

        <div class="stem">
          <div class="stem-title">题干</div>
          <div class="stem-rich-test">
            <Rich-Text />
          </div>
        </div>

        <div class="options">
          <template v-for="i in 4" :key="i">
            <div class="option">
              <n-button>A</n-button>
              <div class="option-info">xxxxxx</div>
              <div class="option-operation">编辑选项</div>
            </div>
          </template>
        </div>
        <div class="add-option">添加选项</div>

        <div class="parsing">
          <div class="parseing-title">解析</div>
          <div class="parseing-rich-test">
            <Rich-Text />
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import RichText from '@/components/QuestionManagePage/RichText.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components:{
    RichText
  }
})
</script>

<style scoped lang="css">
.edit {
  width: 80%;
  margin: 0 auto;
  height: 100%;
}
.n-card {
  margin-top: 5px;
  width: 100%;
  min-height: 630px;
  height: auto;
  border-radius: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header-title {
  font-weight: 700;
  font-size: 20px;
  color: rgb(16, 16, 16);
}
.stem,
.parsing {
  margin-top: 10px;
  display: flex;
  justify-content: left;
}

.stem-title,
.parseing-title {
  flex: 1;
  font-size: 20px;
  color: rgb(16, 16, 16);
}
.stem-rich-test,
.parseing-rich-test {
  flex: 7;
  height: 300px;
  border: 1px solid rgb(187, 187, 187);
}
.option {
  width: 400px;
  height: 47px;
  display: flex;
  line-height: 47px;
  margin-top: 10px;
}
.option > .n-button {
  width: 47px;
  height: 47px;
  border-color: rgb(187, 187, 187);
}
.option-info {
  margin-left: 40px;
  font-size: 20px;
  color: rgb(16, 16, 16);
}
.option-operation {
  margin-left: 80px;
  font-size: 20px;
  color: rgba(25, 138, 250, 1);
}
.add-option {
  margin-top: 10px;
  font-size: 20px;
  color: rgb(25, 138, 250);
}
</style>
