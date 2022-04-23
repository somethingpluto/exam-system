<template>
  <div class="account-register">
    <div class="register-title">账号注册</div>
    <n-form ref="formRef" :model="model" :rules="rules">
      <n-form-item path="name" label="用户名">
        <n-input
          v-model:value="model.name"
          placeholder="请输入用户名"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="tel" label="手机号">
        <n-input v-model:value="model.tel" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input
          v-model:value="model.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>

      <n-form-item
        ref="rPasswordFormItemRef"
        first
        path="reenteredPassword"
        label="重复密码"
      >
        <n-input
          v-model:value="model.reenteredPassword"
          :disabled="!model.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
    </n-form>
    <n-button type="info" size="large" @click="handleRegisterAction">
      立即注册
    </n-button>
  </div>
</template>

<script lang="ts">
import {
  FormInst,
  FormItemInst,
} from 'naive-ui'
import { defineComponent, ref } from 'vue'

import registerAction from '@/services/register/index'
import { errorMsg } from '@/utils/message'

import { IRegister } from '../types'
import rules from './config/registerAccountRules'

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null)
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    const userRegisterInfo = ref<IRegister>({
      name: null,
      password: null,
      reenteredPassword: null,
      tel: null
    })

    const handleRegisterAction = async (e: MouseEvent) => {
      await formRef.value?.validate();
      await registerAction(userRegisterInfo.value.name!, userRegisterInfo.value.password!, userRegisterInfo.value.tel!)
    }

    return {
      formRef,
      rPasswordFormItemRef,
      model: userRegisterInfo,
      rules,
      handleRegisterAction
    }
  }
})
</script>

<style scoped lang="css">
.account-register {
  height: 100%;
}
.register-title {
  font-size: 20px;
  color: #101010;
}
.phone-number {
  margin-top: 30px;
}

.verify-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 20px 0;
}
.code {
  width: 70%;
}
.n-button {
  width: 100%;
}
.n-form {
  margin-top: 15px;
}
</style>
