<template>
  <div class="add-admin">
    <n-button class="add-button" @click="showModal = true" type="info">
      添加管理员
    </n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <div class="title">添加管理员</div>
        <n-form ref="formRef" :model="formValue" :rules="rules" :size="'large'">
          <!--          管理员姓名-->
          <n-form-item label="姓名" path="admin.adminName">
            <n-input
              v-model:value="formValue.admin.adminName"
              placeholder="请输入管理员姓名"
            />
          </n-form-item>
          <!--          管理员cardId-->
          <n-form-item label="cardId" path="admin.cardId">
            <n-input
              v-model:value="formValue.admin.cardId"
              placeholder="请输入管理员cardId"
            />
          </n-form-item>
          <!--          邮箱-->
          <n-form-item label="邮箱" path="admin.email">
            <n-input
              v-model:value="formValue.admin.email"
              placeholder="请输入管理员邮箱"
            />
          </n-form-item>
          <!--          密码-->
          <n-form-item label="密码" path="admin.pwd">
            <n-input
              v-model:value="formValue.admin.pwd"
              placeholder="请输入管理员密码"
            />
          </n-form-item>
          <!--          权限-->
          <n-form-item label="权限" path="admin.role">
            <n-input
              v-model:value="formValue.admin.role"
              placeholder="请输入管理员权限"
            />
          </n-form-item>
          <!--          性别-->
          <n-form-item label="性别" path="admin.sex">
            <n-input
              v-model:value="formValue.admin.sex"
              placeholder="请输入管理员性别"
            />
          </n-form-item>
          <!--          电话-->
          <n-form-item label="电话" path="admin.tel">
            <n-input
              v-model:value="formValue.admin.tel"
              placeholder="请输入管理员电话"
            />
          </n-form-item>
          <n-form-item class="item-button">
            <n-button
              attr-type="button"
              type="info"
              @click="addAdmin"
              class="change"
            >
              添加
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts">
import { errorMsg, successMsg } from '@/utils/message';
import { FormInst, useDialog } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import { addAdminAction } from '@/services/getAdmins';

export default defineComponent({
  emits:['refresh'],
  setup(props,{emit}) {
    const formRef = ref<FormInst | null>(null);
    const  showModal=ref(false)
    //表单数据
    const formValue = ref({
      admin: {
        adminName: '',
        cardId: '',
        email: '',
        pwd: '',
        role: '',
        sex: '',
        tel: '',
      },
    });
    // 验证规则
    const rules = {
      admin: {
        adminName: {
          required: true,
          message: '请输入管理员姓名',
          trigger: 'blur',
        },
        cardId: {
          required: true,
          message: '请输入管理员卡号',
          trigger: 'blur',
        },
        email: {
          required: true,
          message: '请输入管理员邮箱',
          trigger: 'blur',
        },
        pwd: {
          required: true,
          message: '请输入管理员密码',
          trigger: 'blur',
        },
        role: {
          required: true,
          message: '请输入管理员权限',
          trigger: 'blur',
        },
        sex: {
          required: true,
          message: '请输入管理员性别',
          trigger: 'blur',
        },
        tel: {
          required: true,
          message: '请输入管理员电话',
          trigger: 'blur',
        },
      },
    };

    // 添加用户
    const addAdmin =(e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate( async (errors) => {
        if (!errors) {
          let code:number
          code= await addAdminAction(formValue.value.admin)
          emit('refresh')
          showModal.value=false
          if (code === 200){
            successMsg("添加用户成功")
          }else {
            errorMsg("添加用户失败")
          }
        } else {
          console.log(errors);
          errorMsg('请检查所有数据是否填写');
        }
      });
    };
    return {
      showModal,
      formRef,
      formValue,
      rules,
      addAdmin,
    };
  },
});
</script>

<style scoped>
.add-admin {
  width: 100px;
}

.n-button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
}

.n-card {
  height: 400px;
  overflow-y: auto;
  border: 2px solid rgba(32, 128, 240, 0.6);
}
.title {
  display: flex;
  justify-content: center;
  font-size: 24px;
}
.change {
  width: 200px;
}
.item-button {
  display: flex;
  justify-content: center;
}
</style>
