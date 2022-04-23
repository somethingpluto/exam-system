<template>
  <div class='operation'>
    <n-button class='info' type='info' @click='showModal = true'>修改</n-button>
    <n-button class='error' type='error' @click='handleDelete'>删除</n-button>
    <n-modal v-model:show='showModal'>
      <n-card
        style='width: 600px'
        title='修改管理员信息'
        :bordered='false'
        size='huge'
        role='dialog'
        aria-modal='true'
      >
        <n-form ref='formRef' :model='formValue' :rules='rules' :size="'large'">
          <n-form-item label='管理员姓名' path='admin.name'>
            <n-input
              v-model:value='formValue.admin.name'
              placeholder='输入考试编号'
            />
          </n-form-item>
          <n-form-item label='电话' path='admin.phone'>
            <n-input
              v-model:value='formValue.admin.phone'
              placeholder='输入考试日期'
            />
          </n-form-item>
          <n-form-item label='邮箱' path='admin.email'>
            <n-input
              v-model:value='formValue.admin.email'
              placeholder='参加该场考试的专业'
            />
          </n-form-item>
          <n-form-item>
            <n-button
              attr-type='button'
              type='info'
              @click='changAdminInfo'
              class='change'
            >
              修改
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang='ts'>
import { errorMsg, successMsg } from '@/utils/message';
import { FormInst, useDialog, useMessage } from 'naive-ui';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formRef = ref<FormInst | null>(null);
    const dialog = useDialog();

    //表单数据
    const formValue = ref({
      admin: {
        name: props.row.adminName,
        phone: props.row.tel,
        email: props.row.email,
      },
    });
    // 验证规则
    const rules = {
      admin: {
        name: {
          required: true,
          message: '请输入管理员姓名',
          trigger: 'blur',
        },
      },
    };

    // 删除用户事件
    const handleDelete = () => {
      dialog.warning({
        title: '警告',
        content: '确定删除？',
        positiveText: '确定',
        negativeText: '不确定',
        onPositiveClick: () => {
          successMsg('删除成功');
        },
        onNegativeClick: () => {
          errorMsg('删除失败');
        },
      });
    };

    // 修改事件
    const changAdminInfo = (e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate((errors) => {
        if (!errors) {
          successMsg('修改成功');
        } else {
          console.log(errors);
          errorMsg('修改失败');
        }
      });
    };
    return {
      handleDelete,
      showModal: ref(false),
      formRef,
      formValue,
      rules,
      changAdminInfo,
    };
  },
});
</script>

<style scoped lang='css'>
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
