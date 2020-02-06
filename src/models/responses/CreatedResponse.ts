import { IData, IMetadata, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";

export class CreatedResponse implements IResponse {
  constructor(public data: IData = null, public metadata: IMetadata = { code: HttpStatusCode.CREATED, message: "Created", timestamp: new Date() }) {}
}
