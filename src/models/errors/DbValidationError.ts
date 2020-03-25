import { IError } from "./IError";
import { DbError } from "./DbError";

export class DbValidationError extends DbError {
  constructor(data: IError[]) {
    super("Validation error!", data, DbValidationError.name);
  }
}
