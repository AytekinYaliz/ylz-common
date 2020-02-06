import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class BadRequestResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(data: IData = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.BAD_REQUEST)) {
    this.data = data;
    this.metadata = {
      code: HttpStatusCode.BAD_REQUEST,
      message,
      timestamp: new Date()
    };
  }
}
