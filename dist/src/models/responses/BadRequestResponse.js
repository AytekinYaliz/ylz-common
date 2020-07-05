"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class BadRequestResponse {
    constructor(data = null, errors = null, message = utilities_1.getEnumKey(constants_1.HttpStatusCode, constants_1.HttpStatusCode.BAD_REQUEST)) {
        this.data = data;
        this.code = constants_1.HttpStatusCode.BAD_REQUEST;
        this.message = message;
        this.errors = errors;
        this.timestamp = new Date();
    }
}
exports.BadRequestResponse = BadRequestResponse;
//# sourceMappingURL=BadRequestResponse.js.map