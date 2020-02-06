import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class NoContentResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(data: IData = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.NO_CONTENT)) {
    this.data = data;
    this.metadata = {
      code: HttpStatusCode.NO_CONTENT,
      message,
      timestamp: new Date()
    };
  }
}
