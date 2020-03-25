import { IError } from "./IError";
import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../../libs/constants";

export class DbError extends BaseError {
  /**
   * Creates an API error.
   * @param {string} message - Error message [[]].
   * @param {IError[]} data - Error details.
   * @param {string} type - Type of error [DbError.name].
   */
  constructor(message: string, data: IError[] = [], type: string = DbError.name) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, data, type, false);
  }
}
