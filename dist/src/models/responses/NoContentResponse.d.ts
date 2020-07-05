import { IData, ICode, IMessage, ITimestamp, IResponse } from "./IResponse";
import { IError } from "../errors";
export declare class NoContentResponse implements IResponse {
    data: IData;
    code: ICode;
    message: IMessage;
    timestamp: ITimestamp;
    errors: IError;
    constructor(data?: IData, errors?: IError, message?: string);
}
