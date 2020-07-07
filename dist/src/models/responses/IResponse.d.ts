export declare type IData = any | any[] | null;
export declare type ICode = number;
export declare type IMessage = string;
export declare type ITimestamp = Date;
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
export declare const A = "A";
