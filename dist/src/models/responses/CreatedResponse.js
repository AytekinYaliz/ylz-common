"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class CreatedResponse {
    constructor(data = null, metadata = { code: constants_1.HttpStatusCode.CREATED, message: "Created", timestamp: new Date() }) {
        this.data = data;
        this.metadata = metadata;
    }
}
exports.CreatedResponse = CreatedResponse;
//# sourceMappingURL=CreatedResponse.js.map