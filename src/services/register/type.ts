export interface IRegisterRes{
  code:number,
  message:string,
  data:any
}

export interface IRegisterReq{
  studentName:string,
  pwd:string,
  tel:string
}