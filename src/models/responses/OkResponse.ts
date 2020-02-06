import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class OkResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(data: IData = null, message: string = getEnumKey(HttpStatusCode, HttpStatusCode.OK)) {
    this.data = data;
    this.metadata = {
      code: HttpStatusCode.OK,
      message,
      timestamp: new Date()
    };
  }
}
