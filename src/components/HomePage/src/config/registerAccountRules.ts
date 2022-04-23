import { FormItemRule, FormRules } from "naive-ui"

const registerRules: FormRules = {
  name: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入用户名')
        } else if (!/^[\u4e00-\u9fa5]{2,6}$/.test(value)) {
          return new Error('请输入真实姓名')
        }
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("请输入密码")
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  tel: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入电话号码')
        } else if (!/^[1]+\d{10}$/.test(value)) {
          return new Error('请输入正确格式的电话号码')
        }
      },
      trigger: ['input', 'blur']
    }
  ]
}

export default registerRules
