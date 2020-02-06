import { IError } from "./IError";
import { ApiError } from "./ApiError";
import { HttpStatusCode } from "../../libs/constants";

export class BadRequestError extends ApiError {
  constructor(errors: IError[]) {
    super(errors[0] ? errors[0].msg : "Bad Request", HttpStatusCode.BAD_REQUEST, errors, BadRequestError.name);
  }
}
