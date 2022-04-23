import { FormRules } from 'naive-ui';

const loginAccoutRules: FormRules = {
  name:{
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  },
  password:{
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  }
};

export { loginAccoutRules };
