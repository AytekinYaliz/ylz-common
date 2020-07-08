import { IData, ICode, IMessage, ITimestamp, IError, IResponse } from "./IResponse";
import { Nullable } from "src/libs/customTypes";
export declare class CreatedResponse implements IResponse {
    data: IData;
    errors: Nullable<IError[]>;
    code: ICode;
    message: IMessage;
    timestamp: ITimestamp;
    constructor(data?: IData, errors?: Nullable<IError[]>, code?: ICode, message?: IMessage, timestamp?: ITimestamp);
}
