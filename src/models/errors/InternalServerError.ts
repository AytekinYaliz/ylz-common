import { IError } from "./IError";
import { ApiError } from "./ApiError";
import { HttpStatusCode } from "../../libs/constants";

export class InternalServerError extends ApiError {
  constructor(errors: IError[]) {
    super("Internal Server Error", HttpStatusCode.INTERNAL_SERVER_ERROR, errors);
  }
}
