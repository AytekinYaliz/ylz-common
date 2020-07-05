"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class CreatedResponse {
    constructor(data = null, errors = null, code = constants_1.HttpStatusCode.CREATED, message = "Created", timestamp = new Date()) {
        this.data = data;
        this.errors = errors;
        this.code = code;
        this.message = message;
        this.timestamp = timestamp;
    }
}
exports.CreatedResponse = CreatedResponse;
//# sourceMappingURL=CreatedResponse.js.map