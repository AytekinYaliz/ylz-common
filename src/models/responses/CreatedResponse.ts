import { IData, ICode, IMessage, ITimestamp, IResponse } from "./IResponse";
import { HttpStatusCode } from "../../libs/constants";
import { IError } from "../errors";

export class CreatedResponse implements IResponse {
  constructor(
    public data: IData = null,
    public errors: IError = null,
    public code: ICode = HttpStatusCode.CREATED,
    public message: IMessage = "Created",
    public timestamp: ITimestamp = new Date()
  ) {}
}
