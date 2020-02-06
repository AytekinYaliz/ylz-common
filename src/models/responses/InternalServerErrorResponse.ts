import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";

export class InternalServerErrorResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(data: IData = null, message: string = "") {
    this.data = data;
    this.metadata = {
      code: HttpStatusCode.UNPROCESSABLE,
      message,
      timestamp: new Date()
    };
  }
}
