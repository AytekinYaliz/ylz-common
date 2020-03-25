import { IError } from "./IError";
import { DbError } from "./DbError";

export class DbValidationError extends DbError {
  /**
   * Creates a DB Validation error.
   * @param {IError[]} data - Error details [[]].
   */
  constructor(data: IError[]) {
    super("Validation error!", data, DbValidationError.name);
  }
}
