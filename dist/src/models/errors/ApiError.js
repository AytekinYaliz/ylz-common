"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
const constants_1 = require("../../libs/constants");
class ApiError extends BaseError_1.BaseError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error [HttpStatusCode.INTERNAL_SERVER_ERROR].
     * @param {IError[]} data - Error details [[]].
     * @param {string} type - Type of error [ApiError.name].
     * @param {boolean} isPublic - Whether the message should be visible to user or not [false].
     */
    constructor(message, status = constants_1.HttpStatusCode.INTERNAL_SERVER_ERROR, data = [], type = ApiError.name, isPublic = false) {
        super(message, status, data, type, isPublic);
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=ApiError.js.map