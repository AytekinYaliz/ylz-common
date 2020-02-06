import { IData, IMetadata, IResponse } from "./IResponse";
export declare class BadRequestResponse implements IResponse {
    data: IData;
    metadata: IMetadata;
    constructor(data?: IData, message?: string);
}
