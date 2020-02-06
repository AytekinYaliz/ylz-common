import { IError } from "./IError";
import { ApiError } from "./ApiError";
export declare class ForbiddenError extends ApiError {
    constructor(errors: IError[]);
}
