import { IError } from "./IError";
export declare abstract class BaseError extends Error {
    message: string;
    status: number;
    data: IError[];
    type: string;
    isPublic: boolean;
    constructor(message: string, status: number, data: IError[], type: string, isPublic: boolean);
}
