"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class UnprocessableResponse {
    constructor(data = null, message = "") {
        this.data = data;
        this.metadata = {
            code: constants_1.HttpStatusCode.UNPROCESSABLE,
            message,
            timestamp: new Date()
        };
    }
}
exports.UnprocessableResponse = UnprocessableResponse;
//# sourceMappingURL=UnprocessableResponse.js.map