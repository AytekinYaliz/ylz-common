import { IError } from "./IError";
import { BaseError } from "./BaseError";
export declare class ApiError extends BaseError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error [HttpStatusCode.INTERNAL_SERVER_ERROR].
     * @param {IError[]} data - Error details [[]].
     * @param {string} type - Type of error [ApiError.name].
     * @param {boolean} isPublic - Whether the message should be visible to user or not [false].
     */
    constructor(message: string, status?: number, data?: IError[], type?: string, isPublic?: boolean);
}
