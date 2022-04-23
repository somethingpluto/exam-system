import { FormItemRule, FormRules } from "naive-ui"

const manageAccountRules: FormRules = {
  name: [
    {
      required: true,
      validator (rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入用户名')
        } else if (!/^[0-9]{2,10}$/.test(value)) {
          return new Error('用户名为2到6位的数字或字母')
        } 
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      validator(rule:FormItemRule,value:string){
        if(!value){
          return new Error("请输入密码")
        }
        return true
      },
      trigger:['input','blur']
    }
  ]
}

export {manageAccountRules}