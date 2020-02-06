import { IData, IMetadata, IResponse } from "./IResponse";
export declare class InternalServerErrorResponse implements IResponse {
    data: IData;
    metadata: IMetadata;
    constructor(data?: IData, message?: string);
}
