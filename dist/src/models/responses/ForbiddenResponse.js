"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class ForbiddenResponse {
    constructor(message = utilities_1.getEnumKey(constants_1.HttpStatusCode, constants_1.HttpStatusCode.FORBIDDEN)) {
        this.data = null;
        this.metadata = {
            code: constants_1.HttpStatusCode.FORBIDDEN,
            message,
            timestamp: new Date()
        };
    }
}
exports.ForbiddenResponse = ForbiddenResponse;
//# sourceMappingURL=ForbiddenResponse.js.map