import { IError } from "./IError";
import { ApiError } from "./ApiError";
import { HttpStatusCode } from "../../libs/constants";

export class UnprocessableError extends ApiError {
  constructor(errors: IError[]) {
    super("Validation Error", HttpStatusCode.UNPROCESSABLE, errors, UnprocessableError.name);
  }
}
