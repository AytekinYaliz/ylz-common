import { IData, ICode, IMessage, ITimestamp, IError, IResponse } from "./IResponse";
export declare class InternalServerErrorResponse implements IResponse {
    data: IData;
    code: ICode;
    message: IMessage;
    timestamp: ITimestamp;
    errors: IError;
    constructor(data?: IData, errors?: IError, message?: string);
}
