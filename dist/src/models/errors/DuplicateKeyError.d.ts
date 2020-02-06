import { DbError } from "./DbError";
export declare class DuplicateKeyError extends DbError {
    constructor(column: string, value?: string);
}
