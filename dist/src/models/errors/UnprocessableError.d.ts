import { IError } from "./IError";
import { ApiError } from "./ApiError";
export declare class UnprocessableError extends ApiError {
    constructor(errors: IError[]);
}
