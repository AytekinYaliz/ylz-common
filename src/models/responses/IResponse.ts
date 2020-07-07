export type IData = any | any[] | null;
export type IError = any | any[] | null;
export type ICode = number;
export type IMessage = string;
export type ITimestamp = Date;

export interface IResponse {
  data: IData;
  code: ICode;
  errors: IError;
  message: IMessage;
  timestamp: ITimestamp;
}

export const A = "A";
