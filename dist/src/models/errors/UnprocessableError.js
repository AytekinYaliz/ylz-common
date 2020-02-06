"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("./ApiError");
const constants_1 = require("../../libs/constants");
class UnprocessableError extends ApiError_1.ApiError {
    constructor(errors) {
        super("Validation Error", constants_1.HttpStatusCode.UNPROCESSABLE, errors, UnprocessableError.name);
    }
}
exports.UnprocessableError = UnprocessableError;
//# sourceMappingURL=UnprocessableError.js.map