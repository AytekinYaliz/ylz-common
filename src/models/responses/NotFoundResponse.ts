import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class NotFoundResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(message: string = getEnumKey(HttpStatusCode, HttpStatusCode.NOT_FOUND)) {
    this.data = null;
    this.metadata = {
      code: HttpStatusCode.NOT_FOUND,
      message,
      timestamp: new Date()
    };
  }
}
