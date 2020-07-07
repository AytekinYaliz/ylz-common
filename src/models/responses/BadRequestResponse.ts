import { IData, ICode, IMessage, ITimestamp, IError, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class BadRequestResponse implements IResponse {
  public data: IData;
  public code: ICode;
  public message: IMessage;
  public timestamp: ITimestamp;
  public errors: IError;

  constructor(data: IData = null, errors: IError = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.BAD_REQUEST)) {
    this.data = data;
    this.code = HttpStatusCode.BAD_REQUEST;
    this.message = message;
    this.errors = errors;
    this.timestamp = new Date();
  }
}
