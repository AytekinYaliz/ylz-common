import { IError } from "./IError";

export abstract class BaseError extends Error {
  constructor(public message: string, public status: number, public data: IError[], public type: string, public isPublic: boolean) {
    super(message);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error["captureStackTrace"]) {
      // @ts-ignore
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
