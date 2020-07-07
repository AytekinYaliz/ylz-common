export declare type IData = any | any[] | null;
export declare type IError = any | any[] | null;
export declare type ICode = number;
export declare type IMessage = string;
export declare type ITimestamp = Date;
export interface IResponse {
    data: IData;
    code: ICode;
    errors: IError;
    message: IMessage;
    timestamp: ITimestamp;
}
export declare const A = "A";
