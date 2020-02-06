"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class NotFoundResponse {
    constructor(message = utilities_1.getEnumKey(constants_1.HttpStatusCode, constants_1.HttpStatusCode.NOT_FOUND)) {
        this.data = null;
        this.metadata = {
            code: constants_1.HttpStatusCode.NOT_FOUND,
            message,
            timestamp: new Date()
        };
    }
}
exports.NotFoundResponse = NotFoundResponse;
//# sourceMappingURL=NotFoundResponse.js.map