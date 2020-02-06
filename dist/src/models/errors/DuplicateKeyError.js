"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbError_1 = require("./DbError");
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class DuplicateKeyError extends DbError_1.DbError {
    constructor(column, value = "") {
        super(utilities_1.getEnumKey(constants_1.HttpStatusCode, constants_1.HttpStatusCode.UNPROCESSABLE), [
            {
                location: column,
                msg: "One record with this name already exist and it can not be duplicated.",
                param: column,
                value
            }
        ], DuplicateKeyError.name);
    }
}
exports.DuplicateKeyError = DuplicateKeyError;
//# sourceMappingURL=DuplicateKeyError.js.map