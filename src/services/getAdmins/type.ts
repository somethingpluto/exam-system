export interface IAdminData {
  adminId?: any;
  adminName?: string;
  sex?: string;
  tel?: string;
  email?: string;
  pwd?: any;
  cardId?: string;
  role?: string;
}

export interface IAdminRes {
  code: number;
  message: string;
  data: IAdminData[];
}
