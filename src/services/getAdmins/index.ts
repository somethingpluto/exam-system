import { createService } from '@/http';

import { IAdminRes, IAdminData } from './type';

const { defineAPI } = createService();

const getAdmin = defineAPI<IAdminRes>('GET', '/admins');
const addAdmin = defineAPI<IAdminRes, IAdminData>('POST', '/admin');
export default async function getAdminAction() {
  let result: any;
  await getAdmin().then((data) => {
    result = data.data;
  })
  if (result.code === 200) {
    return result.data;
  } else {
    return [];
  }
}


export async function addAdminAction(addminInfo: IAdminData) {
  let result: any;
  console.log('执行');
  await addAdmin(addminInfo).then((data) => {
    result = data.data.code;
  });
  return result;
}

export async function getAdminByIdAction(Id:string){
  const getAdminById = defineAPI<IAdminData,string>("GET",`/admin/${Id}`)
  let result:any
  await getAdminById().then((data)=>{
    console.log(data.data);
    result=data.data
  })
  if (result.code === 200){
    return  result.data
  }else {
    return []
  }
}
