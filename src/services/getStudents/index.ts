import { createService } from "@/http";

import { IStudentListRes, IChangeRes, IStudentInfo,IStudentRes } from './type';
import { data } from 'dom7';
const {defineAPI} = createService()

const getStudent = defineAPI<IStudentListRes>("GET","/students/1/10")
const updateStudent = defineAPI<IChangeRes,IStudentInfo>("PUT","/student")
const addStudent = defineAPI<IStudentRes,IStudentInfo>("POST","/student")

export default async function getStudentsAction(){
  let result:any;
  await getStudent().then((data)=>{
    result = data.data
  }).catch((err)=>{
  })
  if(result.code === 200){
    return result.data.records
  }else{
    return []
  }
}
export async function addStudentAction(studentInfo:IStudentInfo){
  let result:any
  console.log("添加学生")
  await addStudent(studentInfo).then((data)=>{
    result=data.data.code
    getStudentsAction()
  })
  return result
}


export async function updateStudentAction(studentInfo:IStudentInfo){
  let result:any;
  await updateStudent(studentInfo).then((data)=>{
    result=data.data.code;
  })
  console.log("执行update");
  return result;
}

export async function removeStudentAction(studentId:any){
  const removeStudent = defineAPI<IChangeRes,string>("delete",`/student/${studentId}`)
  let result:any;
  await removeStudent(studentId).then((data)=>{
    result = data.data.code
  })
  return result
}

export async function getStudentByIdAction(Id:any){
  const getStudentById = defineAPI<IStudentRes>("GET",`/student/${Id}`)
  let result:any
  await getStudentById().then((data)=>{
    result=data.data
  })
  if (result.code === 200){
    return result.data
  }
}
