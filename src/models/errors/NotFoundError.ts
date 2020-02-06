import { IError } from "./IError";
import { ApiError } from "./ApiError";
import { HttpStatusCode } from "../../libs/constants";

export class NotFoundError extends ApiError {
  constructor(errors: IError[]) {
    super("Page Not found", HttpStatusCode.NOT_FOUND, errors, NotFoundError.name);
  }
}
