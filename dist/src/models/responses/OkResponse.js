"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class OkResponse {
    constructor(data = null, errors = null, message = utilities_1.getEnumKey(constants_1.HttpStatusCode, constants_1.HttpStatusCode.OK)) {
        this.data = data;
        this.code = constants_1.HttpStatusCode.OK;
        this.message = message;
        this.errors = errors;
        this.timestamp = new Date();
    }
}
exports.OkResponse = OkResponse;
//# sourceMappingURL=OkResponse.js.map