"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(message, status, data, type, isPublic) {
        super(message);
        this.message = message;
        this.status = status;
        this.data = data;
        this.type = type;
        this.isPublic = isPublic;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error["captureStackTrace"]) {
            // @ts-ignore
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=BaseError.js.map