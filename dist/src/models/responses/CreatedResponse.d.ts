import { IData, ICode, IMessage, ITimestamp, IResponse } from "./IResponse";
import { IError } from "../errors";
export declare class CreatedResponse implements IResponse {
    data: IData;
    errors: IError;
    code: ICode;
    message: IMessage;
    timestamp: ITimestamp;
    constructor(data?: IData, errors?: IError, code?: ICode, message?: IMessage, timestamp?: ITimestamp);
}
