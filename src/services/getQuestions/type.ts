export interface IChooseQuestion {
  questionId: number;
  subject: string;
  section: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  question: string;
  level: string;
  rightAnswer: string;
  analysis: string;
  score: number;
}

interface I {
  questionId: number;
  subject: string;
  question: string;
  answer: string;
  score: number;
  level: string;
  section?: any;
  analysis?: any;
}

interface IJudge {
  questionId: number;
  subject: string;
  question: string;
  answer: string;
  level: string;
  section: string;
  score: number;
  analysis?: any;
}

export interface IQuestionRes {
  1: IChooseQuestion[];
  2: I[];
  3: IJudge[];
}
