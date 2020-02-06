import { IData, IMetadata, IResponse } from "./IResponse";
export declare class NotFoundResponse implements IResponse {
    data: IData;
    metadata: IMetadata;
    constructor(message?: string);
}
