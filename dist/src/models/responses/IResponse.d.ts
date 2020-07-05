export declare type IData = any | any[] | null;
export declare type ICode = number;
export declare type IMessage = string;
export declare type ITimestamp = Date;
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
export declare const A = "A";
