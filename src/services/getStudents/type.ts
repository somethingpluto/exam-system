export interface IStudentInfo {
  studentId?: number;
  studentName?: string;
  grade?: string;
  major?: string;
  clazz?: string;
  institute?: string;
  tel?: string;
  email?: string;
  pwd?: string;
  cardId?: string;
  sex?: string;
  role?: string;
}

export interface IStudentPage {
  records: IStudentInfo[];
  total: number;
  size: number;
  current: number;
  searchCount: boolean;
  pages: number;
}

export interface IStudentListRes {
  code: number;
  message: string;
  data: IStudentPage;
}

export interface IStudentListReq{
  page:string
  size:string
}

export interface IChangeRes{
  code:number
  data:object,
  message:string
}

export interface IStudentRes{
  code:number
  message:string
  date:object
}
