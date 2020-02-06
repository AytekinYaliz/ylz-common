"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class NoContentResponse {
    constructor(data = null, message = utilities_1.getEnumKey(constants_1.HttpStatusCode, constants_1.HttpStatusCode.NO_CONTENT)) {
        this.data = data;
        this.metadata = {
            code: constants_1.HttpStatusCode.NO_CONTENT,
            message,
            timestamp: new Date()
        };
    }
}
exports.NoContentResponse = NoContentResponse;
//# sourceMappingURL=NoContentResponse.js.map