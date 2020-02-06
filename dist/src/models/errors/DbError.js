"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
const constants_1 = require("../../libs/constants");
class DbError extends BaseError_1.BaseError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {IError[]} data - error details.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, data = [], type = DbError.name) {
        super(message, constants_1.HttpStatusCode.INTERNAL_SERVER_ERROR, data, type, false);
    }
}
exports.DbError = DbError;
//# sourceMappingURL=DbError.js.map