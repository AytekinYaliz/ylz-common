export type IData = any | any[] | null;
export type ICode = number;
export type IMessage = string;
export type ITimestamp = Date;

export interface IResponse {
  data: IData;
  code: ICode;
  errors: IError | IError[] | null;
  message: IMessage;
  timestamp: ITimestamp;
}

export interface IError {
  location: string;
  msg: string;
  param: string;
  value: string;
}

export const A = "A";
