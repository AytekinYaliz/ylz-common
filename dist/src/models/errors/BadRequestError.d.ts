import { IError } from "./IError";
import { ApiError } from "./ApiError";
export declare class BadRequestError extends ApiError {
    constructor(errors: IError[]);
}
