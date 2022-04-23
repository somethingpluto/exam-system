export interface IReplay {
  messageId: number;
  replayId: number;
  replay: string;
  replayTime: string;
}

export interface IRecord {
  id: number;
  temp_id?: any;
  title: string;
  content: string;
  time: string;
  replays: IReplay[];
}

export interface Data {
  records: IRecord[];
  total: number;
  size: number;
  current: number;
  searchCount: boolean;
  pages: number;
}

export interface ICommentsRes  {
  code: number;
  message: string;
  data: Data;
}
