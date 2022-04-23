export interface ILogin{
  name:string | null,
  password: number | null
}

export interface IRegister{
  name:string | null,
  password:string | null
  reenteredPassword: string | null,
  tel:string | null
}