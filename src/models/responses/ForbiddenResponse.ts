import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { getEnumKey } from "../../libs/utilities";

export class ForbiddenResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(message: string = getEnumKey(HttpStatusCode, HttpStatusCode.FORBIDDEN)) {
    this.data = null;
    this.metadata = {
      code: HttpStatusCode.FORBIDDEN,
      message,
      timestamp: new Date()
    };
  }
}
