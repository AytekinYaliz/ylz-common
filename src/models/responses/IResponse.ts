export type IData = any | any[] | null;
export type ICode = number;
export type IMessage = string;
export type ITimestamp = Date;

export interface IResponse {
  data: IData;
  code: ICode;
  message: IMessage;
  timestamp: ITimestamp;
}

export interface IMetadata {
  code: number;
  message: string;
  timestamp: Date;
}

export const A = "A";
