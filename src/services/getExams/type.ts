export interface IExamInfo {
  examCode: number;
  description: string;
  source: string;
  paperId: number;
  examDate: string;
  totalTime: number;
  grade: string;
  term: string;
  major: string;
  institute: string;
  totalScore: number;
  type: string;
  tips: string;
}

export interface IExamData {
  records: IExamInfo[];
  total: number;
  size: number;
  current: number;
  searchCount: boolean;
  pages: number;
}

export interface IPaperRes {
  code: number;
  message: string;
  data: IExamData;
}

export interface IExamRes{
  code:number
  message:string
  data:object
}
