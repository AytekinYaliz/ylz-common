import { IError } from "./IError";
import { ApiError } from "./ApiError";
export declare class NotFoundError extends ApiError {
    constructor(errors: IError[]);
}
