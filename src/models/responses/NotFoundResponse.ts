import { IData, ICode, IMessage, ITimestamp, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";
import { IError } from "../errors";

export class NotFoundResponse implements IResponse {
  public data: IData;
  public code: ICode;
  public message: IMessage;
  public timestamp: ITimestamp;
  public errors: IError;

  constructor(data: IData = null, errors: IError = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.NOT_FOUND)) {
    this.data = data;
    this.code = HttpStatusCode.NOT_FOUND;
    this.message = message;
    this.errors = errors;
    this.timestamp = new Date();
  }
}
