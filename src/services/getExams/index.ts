import { createService } from "@/http";

import { IExamInfo, IExamRes, IPaperRes } from './type';
const {defineAPI} = createService()

const getExam = defineAPI<IPaperRes>("GET","/exams/1/10")


export default async function getExamAction(){
  let result:any;
  await getExam().then((data)=>{
    result = data.data
  })
  if(result.code === 200){
    return result.data.records
  }else{
    return []
  }
}

export async function getExamByExamCodeAction(examCode:string){
  const getExamByExamCode =  defineAPI<IExamInfo>("GET",`/exams/${examCode}`)
  let result:any
  await getExamByExamCode().then((data)=>{
    result=data.data
    console.log(result)
  })
  if(result.code === 200){
    return result.data
  }
}

export async function getExamByIdAction(Id:any){
  const getExamById = defineAPI<IExamRes>("GET",`/exam/${Id}`)
  let result:any
  await getExamById().then((data)=>{
    result=data.data
  })
  if (result.code === 200){
    return result.data
  }
}



