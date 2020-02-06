"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("./ApiError");
const constants_1 = require("../../libs/constants");
class NotFoundError extends ApiError_1.ApiError {
    constructor(errors) {
        super("Page Not found", constants_1.HttpStatusCode.NOT_FOUND, errors, NotFoundError.name);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map