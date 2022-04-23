import { createService } from "@/http";

import { ITeacherInfo, ITeacherRes, IUpdateRes,IDeleteRes } from './type';
const {defineAPI} = createService()

const getTeacher = defineAPI<ITeacherRes>("GET","/teachers/1/10")
const addTeacher = defineAPI<IUpdateRes,ITeacherInfo>("POST","/teacher")
const updateTeacher = defineAPI<IUpdateRes,ITeacherInfo>("PUT","/teacher")

export default async function getTeachersAction(){
  let result:any;
  await getTeacher().then((data)=>{
    result = data.data
  })
  if(result.code === 200){
    return result.data.records
  }else{
    return []
  }
}

export async function addTeacherAction(teacherInfo:ITeacherInfo){
  let result:any
  await addTeacher(teacherInfo).then((data)=>{
    result=data.data.code
  })
  return result
}

export async function updateTeacherInfoAction(teacherInfo:ITeacherInfo){
  let result:any;
  await updateTeacher(teacherInfo).then((data)=>{
    result=data.data.code
  })
  return result
}

export async function getTeacherByIdAction(Id:any){
  const getTeacherById = defineAPI<ITeacherRes>("GET",`/teacher/${Id}`)
  let result:any
  await getTeacherById().then((data)=>{
    console.log(data.data);
    result=data.data
  })
  if (result.code === 200){
    return result.data
  }
}


export async function deleteTeacherByIdAction(Id:any){
  console.log("deleteTeacherById")
  const deleteTeacherById = defineAPI<IDeleteRes>("DELETE",`/teacher/${Id}`)
  let result:any
  await deleteTeacherById().then((data)=>{
    result=data.data
  })
  if(result.code === 200){
    return result.data
  }
}
