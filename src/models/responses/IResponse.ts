export type IData = any | any[] | null;

export interface IResponse {
  data: IData;
  metadata: IMetadata;
}

export interface IMetadata {
  code: number;
  message: string;
  timestamp: Date;
}

export const A = "A";
