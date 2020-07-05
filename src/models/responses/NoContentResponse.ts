import { IData, ICode, IMessage, ITimestamp, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";
import { IError } from "../errors";

export class NoContentResponse implements IResponse {
  public data: IData;
  public code: ICode;
  public message: IMessage;
  public timestamp: ITimestamp;
  public errors: IError;

  constructor(data: IData = null, errors: IError = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.NO_CONTENT)) {
    this.data = data;
    this.code = HttpStatusCode.NO_CONTENT;
    this.message = message;
    this.errors = errors;
    this.timestamp = new Date();
  }
}
