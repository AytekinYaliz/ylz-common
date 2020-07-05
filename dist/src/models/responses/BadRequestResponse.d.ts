import { IData, IResponse } from "./IResponse";
import { IError } from "../errors";
export declare class BadRequestResponse implements IResponse {
    data: IData;
    code: IData;
    message: IData;
    timestamp: IData;
    errors: IError;
    constructor(data?: IData, errors?: IError, message?: string);
}
