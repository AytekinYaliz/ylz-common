import { Nullable } from "../../libs/customTypes";
export type IData = any | any[] | null;
export type ICode = number;
export type IMessage = string;
export type ITimestamp = Date;

export interface IError {
  location: string;
  msg: string;
  param: string;
  value: string;
}

export interface IResponse {
  data: IData;
  code: ICode;
  errors: Nullable<IError[]>;
  message: IMessage;
  timestamp: ITimestamp;
}
