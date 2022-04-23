<template>
  <div class='manage-login'>
      <h2>后台登录</h2>
      <n-form ref='formRef' :model='model' :rules='rules'>
        <n-form-item path='name' label='用户名'>
          <n-input v-model:value='model.name' @keydown.enter.prevent placeholder='请输入用户名' />
        </n-form-item>
        <n-form-item path='password' label='密码'>
          <n-input
            v-model:value='model.password'
            type='password'
            @keydown.enter.prevent
            placeholder="请输入密码"
          />
        </n-form-item>
      </n-form>
      <n-button type='info' @click='handleLoginAction'>
        立即登录
      </n-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import {
  FormInst,
} from 'naive-ui';

interface ModelType {
  name: string | null;
  password: string | null;
}
import {manageAccountRules as rules} from './manage.config'
import { adminLoginAction } from '@/services/login';
import { errorMsg } from '@/utils/message';

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    const userLoginInfo = ref<ModelType>({
      name: null,
      password: null,
    });

    // 验证规则
    const rules={
      name:{
        required:true,
        message:"请输入管理员用户名",
        trigger:'blur',
      },
      password:{
        required: true,
        message: "请输入管理员密码",
        trigger: 'blur',
      }
    }

    const handleLoginAction = (e: MouseEvent) => {
      formRef.value?.validate(async (errors) => {
        if (!errors) {
          const result = await adminLoginAction(userLoginInfo.value.name!, Number(userLoginInfo.value.password))!;
          if (!result) {
            errorMsg('登录失败');
          }
        }
      });
    };
    return {
      formRef,
      model: userLoginInfo,
      handleLoginAction,
      rules
    };
  },
});
</script>

<style scoped>
.manage-login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.n-card {
  width: 400px;
  height: 390px;
  margin: 0 auto;
  border-radius: 30px;
}

.n-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.n-button {
  width: 100%;
}
.n-form-item{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>s
