import { IData, ICode, IMessage, ITimestamp, IError, IResponse } from "./IResponse";
import { Nullable } from "src/libs/customTypes";
export declare class BadRequestResponse implements IResponse {
    data: IData;
    code: ICode;
    message: IMessage;
    timestamp: ITimestamp;
    errors: Nullable<IError[]>;
    constructor(data?: IData, errors?: Nullable<IError[]>, message?: string);
}
