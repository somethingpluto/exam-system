export interface IGetExamList{

}

export interface IEaxm {
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

export interface IExamList {
  code?: number;
  message?: string;
  data?: IExamList[];
}

