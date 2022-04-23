export interface ITeacherInfo {
  teacherId?: number;
  teacherName?: string;
  institute?: string;
  sex?: string;
  tel?: string;
  email?: string;
  pwd?: string;
  cardId?: string;
  type?: string;
  role?: string;
}

export interface ITeacherPage {
  records: ITeacherInfo[];
  total: number;
  size: number;
  current: number;
  searchCount: boolean;
  pages: number;
}

export interface ITeacherRes {
  code: number;
  message: string;
  data: ITeacherPage;
}

export interface IUpdateRes{
  code:number
  data:object
  message:string
}


export interface IDeleteRes{
  code:number
  message:string
  data:number
}