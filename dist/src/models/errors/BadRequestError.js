"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("./ApiError");
const constants_1 = require("../../libs/constants");
class BadRequestError extends ApiError_1.ApiError {
    constructor(errors) {
        super(errors[0] ? errors[0].msg : "Bad Request", constants_1.HttpStatusCode.BAD_REQUEST, errors, BadRequestError.name);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map