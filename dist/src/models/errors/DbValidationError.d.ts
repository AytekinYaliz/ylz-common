import { IError } from "./IError";
import { DbError } from "./DbError";
export declare class DbValidationError extends DbError {
    constructor(data: IError[]);
}
