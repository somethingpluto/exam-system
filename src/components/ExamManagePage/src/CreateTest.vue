<template>
  <div class="create-test">
    <div class="card">
      <n-card>
        <div class="title">创建考试</div>

        <div class="test-name">
          <div class="title">考试名称</div>
          <n-input placeholder="输入考试名称..."></n-input>
        </div>

        <div class="source">
          <div class="title">题目来源</div>
          <div class="option">
            <n-radio-group name="radiogroup">
              <div class="option1">
                <n-radio value="1" size="large">手动组卷</n-radio>
              </div>
              <div class="option2">
                <n-radio value="2" size="large">使用现有试卷</n-radio>
              </div>
            </n-radio-group>
          </div>
        </div>

        <div class="choose">
          <div class="title">选择试卷</div>
          <div class="choose-test">
            <n-dropdown
              trigger="click"
              :options="options"
              @select="handleSelect"
            >
              <n-button class="papers">试卷库</n-button>
            </n-dropdown>
          </div>
        </div>

        <div class="button">
          <n-button size="large" type="info">确定</n-button>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const message = useMessage()
    const showDropdownRef = ref(false)
    return {
        options: [
        {
          label: '高等数学',
          key: '高等数学',
        },
        {
          label: '大学英语',
          key: "大学英语"
        },
        {
          label: '大学物理',
          key: '大学物理'
        },
        {
          label: '大学化学',
          key: '大学化学'
        }
      ],
      showDropdown: showDropdownRef,
      handleSelect (key: string | number) {
        message.info(String(key))
      },
      handleClick () {
        showDropdownRef.value = !showDropdownRef.value
      }
    }
  }
})
</script>

<style scoped lang="css">
.create-test {
  margin: 0 auto;
  width: 1239px;
  height: 100%;
}
.n-card {
  width: 1239px;
  height: 400px;
  border-radius: 20px;
  font-size: 14px;
  padding: 0px;
  margin-top: 30px;
}
.title {
  width: 100px;
  font-weight: 400;
  font-size: 24px;
  color: rgb(16, 16, 16);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 60px;
}
.test-name {
  display: flex;
  justify-content: space-between;
}
.n-input {
  width: 1053px;
  height: 60px;
  border-color: rgb(187, 187, 187);
  border-width: 1px;
  border-style: solid;
  color: rgb(114, 114, 114);
  font-size: 18px;
  padding: 10px;
  text-align: left;
  line-height: 26px;
}

.source {
  display: flex;
  justify-content: space-between;
}
.option {
  width: 1053px;
  line-height: 60px;
}
.choose {
  display: flex;
}
.choose-test {
  height: 60px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.n-collapse {
  margin-top: 10px;
  width: 1053px;
  line-height: 40px;
}

.button {
  margin-top: 70px;
  display: flex;
  justify-content: right;
}
.n-radio-group {
  display: flex;
  justify-content: space-between;
}
</style>
