import { createService } from "@/http";

import {ICommentsRes } from "./type";
const {defineAPI} = createService()


const getComments = defineAPI<ICommentsRes>("GET",'/messages/1/10')

export default async function getCommentsAction(){
  let result:any
  await getComments().then((data)=>{
    result = data.data;
    console.log(result)
  }).catch((err)=>{
    console.log(err)
  })
  if(result.code === 200){
    console.log(result.data)
    return result.data
  }else{
    return []
  }
}
