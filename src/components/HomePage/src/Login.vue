<template>
  <div class="account-login">
    <div class="login-title">
      <span class="account-login">账号登录</span>
    </div>
    <!-- 表单验证 -->
    <n-form ref="formRef" :model="model" :rules="rules">
      <!-- 用户名 -->
      <n-form-item path="name" label="用户名">
        <n-input v-model:value="model.name" placeholder="请输入用户名" />
      </n-form-item>
      <!-- 密码 -->
      <n-form-item path="password" label="密码">
        <n-input
          v-model:value="(model.password)as any "
          type="password"
          placeholder="请输入密码"
        />
      </n-form-item>
    </n-form>
    <!-- 账号操作 -->
    <div class="account-method">
      <a href="javascript:void(0);">修改密码?</a>
      <RouterLink :to="{ name: 'passport.register' }">立即注册</RouterLink>
    </div>
    <!-- 立即登录 -->
    <n-button type="info" size="large" @click="handleLoginAction">
      立即登录
    </n-button>
  </div>
</template>

<script lang="ts">
import { FormInst } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import loginAction from '@/services/login/index';
import { errorMsg } from '@/utils/message';

import { ILogin } from '../types';
import { loginAccoutRules } from './config/loginAccountRules';


export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    const userLoginInfo = ref<ILogin>({
      name: null,
      password: null,
    });
    const rules = loginAccoutRules;
    const handleLoginAction = (e: MouseEvent) => {
      formRef.value?.validate(async (errors) => {
        if (!errors) {
          const result = await loginAction(userLoginInfo.value.name!, Number(userLoginInfo.value.password))!;
          console.log(userLoginInfo.value)
          console.log("登录")
          if (!result) {
            errorMsg('登录失败');
          }
        }
      });
    };

    return {
      formRef,
      model: userLoginInfo,
      rules,
      handleLoginAction,
    };
  },
});
</script>

<style scoped lang="css">
.account-login {
  height: 100%;
}

.login-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.login-title {
  font-size: 20px;
  height: 20px;
  line-height: 20px;
}

.phone-login {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  text-decoration: none;
  color: #101010;
}

.account-method {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #727272;
}

a {
  text-decoration: none;
  color: #101010;
}

.n-button {
  margin-top: 20px;
  width: 100%;
}
</style>
