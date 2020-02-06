import { IData, IMetadata, IResponse } from "./IResponse";
export declare class UnprocessableResponse implements IResponse {
    data: IData;
    metadata: IMetadata;
    constructor(data?: IData, message?: string);
}
