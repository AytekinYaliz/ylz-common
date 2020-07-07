export declare type IData = any | any[] | null;
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
export interface IMetadata {
    code: number;
    message: string;
    timestamp: Date;
}
export interface IError {
    location: string;
    msg: string;
    param: string;
    value: string;
}
export declare const A = "A";
