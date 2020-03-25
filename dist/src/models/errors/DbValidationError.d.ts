import { IError } from "./IError";
import { DbError } from "./DbError";
export declare class DbValidationError extends DbError {
    /**
     * Creates a DB Validation error.
     * @param {IError[]} data - Error details [[]].
     */
    constructor(data: IError[]);
}
