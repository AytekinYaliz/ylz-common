import { IData, ICode, IMessage, ITimestamp, IError, IResponse } from "./IResponse";
export declare class CreatedResponse implements IResponse {
    data: IData;
    errors: IError;
    code: ICode;
    message: IMessage;
    timestamp: ITimestamp;
    constructor(data?: IData, errors?: IError, code?: ICode, message?: IMessage, timestamp?: ITimestamp);
}
