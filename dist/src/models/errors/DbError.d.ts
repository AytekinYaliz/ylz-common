import { IError } from "./IError";
import { BaseError } from "./BaseError";
export declare class DbError extends BaseError {
    /**
     * Creates an API error.
     * @param {string} message - Error message [[]].
     * @param {IError[]} data - Error details.
     * @param {string} type - Type of error [DbError.name].
     */
    constructor(message: string, data?: IError[], type?: string);
}
