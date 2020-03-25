"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbError_1 = require("./DbError");
class DbValidationError extends DbError_1.DbError {
    constructor(data) {
        super("Validation error!", data, DbValidationError.name);
    }
}
exports.DbValidationError = DbValidationError;
//# sourceMappingURL=DbValidationError.js.map