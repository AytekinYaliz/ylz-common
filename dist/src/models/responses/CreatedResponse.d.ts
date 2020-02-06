import { IData, IMetadata, IResponse } from "./IResponse";
export declare class CreatedResponse implements IResponse {
    data: IData;
    metadata: IMetadata;
    constructor(data?: IData, metadata?: IMetadata);
}
