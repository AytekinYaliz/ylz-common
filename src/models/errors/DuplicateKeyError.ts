import { DbError } from "./DbError";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class DuplicateKeyError extends DbError {
  constructor(column: string, value: string = "") {
    super(
      getEnumKey(HttpStatusCode, HttpStatusCode.UNPROCESSABLE),
      [
        {
          location: column,
          msg: "One record with this name already exist and it can not be duplicated.",
          param: column,
          value
        }
      ],
      DuplicateKeyError.name
    );
  }
}
