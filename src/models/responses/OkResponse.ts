import { IData, ICode, IMessage, ITimestamp, IError, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";
import { Nullable } from "src/libs/customTypes";

export class OkResponse implements IResponse {
  public data: IData;
  public code: ICode;
  public message: IMessage;
  public timestamp: ITimestamp;
  public errors: Nullable<IError[]>;

  constructor(data: IData = null, errors: Nullable<IError[]> = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.OK)) {
    this.data = data;
    this.code = HttpStatusCode.OK;
    this.message = message;
    this.errors = errors;
    this.timestamp = new Date();
  }
}
