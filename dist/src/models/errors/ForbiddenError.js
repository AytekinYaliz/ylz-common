"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("./ApiError");
const constants_1 = require("../../libs/constants");
class ForbiddenError extends ApiError_1.ApiError {
    constructor(errors) {
        super(errors[0] ? errors[0].msg : "Forbidden", constants_1.HttpStatusCode.FORBIDDEN, errors, ForbiddenError.name);
    }
}
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=ForbiddenError.js.map