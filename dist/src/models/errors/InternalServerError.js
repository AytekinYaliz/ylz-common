"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("./ApiError");
const constants_1 = require("../../libs/constants");
class InternalServerError extends ApiError_1.ApiError {
    constructor(errors) {
        super("Internal Server Error", constants_1.HttpStatusCode.INTERNAL_SERVER_ERROR, errors);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map