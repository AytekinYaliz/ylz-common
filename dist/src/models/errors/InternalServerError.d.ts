import { IError } from "./IError";
import { ApiError } from "./ApiError";
export declare class InternalServerError extends ApiError {
    constructor(errors: IError[]);
}
