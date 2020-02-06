import { IError } from "./IError";
import { BaseError } from "./BaseError";
export declare class DbError extends BaseError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {IError[]} data - error details.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message: string, data?: IError[], type?: string);
}
