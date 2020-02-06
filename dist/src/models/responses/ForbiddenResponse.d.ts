import { IData, IMetadata, IResponse } from "./IResponse";
export declare class ForbiddenResponse implements IResponse {
    data: IData;
    metadata: IMetadata;
    constructor(message?: string);
}
