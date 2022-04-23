export interface IUserInfoReq{
  username:string,
  password:number
}

export interface Data {
  studentId?: number;
  studentName?: string;
  grade?: string;
  major?: string;
  clazz?: string;
  institute?: string;
  tel?: string;
  email?: string;
  pwd?: any;
  cardId?: string;
  sex?: string;
  role?: string;
}

export interface IUserInfoRes {
  code?: number;
  message?: string;
  data?: Data;
}