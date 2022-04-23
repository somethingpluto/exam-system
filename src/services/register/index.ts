import { createService } from "@/http";
import {router} from '@/router'
import { userInfoStore } from "@/store";

import { IRegisterReq, IRegisterRes } from "./type";

const {defineAPI} = createService()

const register = defineAPI<IRegisterRes,IRegisterReq>("post","/student")

export default async function registerAction(studentName:string,pwd:string,tel:string) {
  const store= userInfoStore()
  let code;
  await register({studentName,pwd,tel}).then((data)=>{
    code = data.data.code
    store.userInfo.studentName=studentName
    store.userInfo.tel =tel
  })
  if(code === 200){
    router.push("/mytest")
    return code
  }
  return code;
}
