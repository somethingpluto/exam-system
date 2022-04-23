<template>
  <div class="operation">
    <n-button class="info" type="info" @click="showModal = true">修改</n-button>
    <n-button class="error" type="error" @click="handleDelete">删除</n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        title="修改教师信息"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-form ref="formRef" :model="formValue" :rules="rules" :size="'large'">
          <n-form-item label="考试编号" path="exam.code">
            <n-input
              v-model:value="formValue.exam.code"
              placeholder="输入考试编号"
            />
          </n-form-item>
          <n-form-item label="日期" path="user.age">
            <n-input
              v-model:value="formValue.exam.date"
              placeholder="输入考试日期"
            />
          </n-form-item>
          <n-form-item label="专业" path="exam.major">
            <n-input
              v-model:value="formValue.exam.major"
              placeholder="参加该场考试的专业"
            />
          </n-form-item>
          <n-form-item>
            <n-button
              attr-type="button"
              type="info"
              @click="handleValidateClick"
              class="change"
            >
              修改
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts">
import { FormInst, useDialog, useMessage } from 'naive-ui'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
const formRef = ref<FormInst | null>(null)
    const message = useMessage()
    const dialog = useDialog()
    const handleDelete =()=>{
        dialog.warning({
          title: '警告',
          content: '确定删除？',
          positiveText: '确定',
          negativeText: '不确定',
          onPositiveClick: () => {
            message.success('删除成功')
          },
          onNegativeClick: () => {
            message.error('删除失败')
          }
        })
    }
    return {
      handleDelete,
      showModal: ref(false),
            formRef,
      size: ref('medium'),
      formValue: ref({
        exam: {
          code: '',
          date: '',
          major:''
        },
      }),
      // rules
      rules: {
        exam: {
          code: {
            required: true,
            message: '请输入考试编号',
            trigger: 'blur'
          },

        }
      },
      // handle
        handleValidateClick (e: MouseEvent) {
        e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success('修改成功')
          } else {
            console.log(errors)
            message.error('请输入必填字段')
          }
        })
      }
    }
  }
})
</script>

<style scoped lang="css">
.operation {
  display: flex;
}
.error {
  margin-left: 6px;
}
.n-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.change {
  width: 100%;
}
</style>
