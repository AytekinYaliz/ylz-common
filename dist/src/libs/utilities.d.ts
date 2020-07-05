/****************************************************************************************
 * FUNCTIONAL OPERATIONS *
 ****************************************************************************************/
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
export declare function forEachSync(arr: any[], func: Function): Promise<void>;
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
export declare function mapSync(arr: any[], func: Function): Promise<any[]>;
/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
export declare function negate(fn: any): (...args: any[]) => boolean;
/**
 * Returns the value of a key in a given object
 * @param key 'key' to test.
 * @returns A Function that takes the object to test
 */
export declare function pluck(key: string): (obj: any) => any;
/**
 * Returns a new object with the lselected key/value pairs of a given object
 * @param keys 'key's to test.
 * @returns A Function that takes the object to test
 */
export declare function plucks(keys: string[]): (obj: any) => any;
/**
 * Returns true if an item is the same as the other one.
 * @param x Item 1 to test.
 * @returns A Function that takes the second item to test
 */
export declare function isSame(x: any): (y: any) => boolean;
export declare function isSameString(a: string, isCaseSensitive?: boolean): (b: string) => boolean;
/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
export declare function isSameEntity(id: any, isCaseSensitive?: boolean): (entity: any) => boolean;
/**
 * Returns true if a field of an object is same as the item.
 * @param item Item to test.
 * @returns A Function that takes the field of the object to test
 */
export declare function isSameItemAsField(item: any): (field: any) => (obj: any) => boolean;
export declare function convertToCodeNameOutput(entity: any): {
    code: any;
    name: any;
};
/**
 * Returns string representation of the key of the given enum value.
 * @param enums Enum list.
 * @param enumValue Value in the enum list.
 * @returns string: if the value is in the enum list
 * undefined: if there is no match
 */
export declare function getEnumKey(enums: any, enumValue: any): string | undefined;
/**
 * Returns enum value of the item which has a key or value representation of the parameter.
 * TypeScript compiles 'number enums' to the following format:
 * { key0, key1 } -> { 0: "key0", 1: "key1", key0: 0, key1: 1 }
 * and 'string enums' to the following format:
 * { key0 = "val0", key1 = "val1" } -> { key0: "val0", key1: "val1" }
 * Please use Type Assertion or Casting on the response.
 * @param enums Enum list.
 * @param enumKeyOrValue Key or Value in the enum list.
 * @returns string: if the enum is a string enum list
 * number: if the enum is a number enum list
 * undefined: if there is no match
 */
export declare function getEnumByKeyOrValue(enums: any, enumKeyOrValue: any): string | number | undefined;
/**
 *
 * @param roles all user roles id's
 * @param recipients array of recepients sent by user containing roleId's and userId's
 * @param allowedDomains array of allowed Domain names
 * @returns empty string if all role Id's and userId' are correct, else returns incorrect role/user Id
 */
export declare function getInvalidRoleIds(roles: any, roleIds: string[]): string[];
export declare function getInvalidUserIds(users: any, userIds: string[]): string[];
/**
 * Sorts a list of data (case-insensitive)
 * @param data The data to sort
 * @param sortBy The field that will be used in sorting
 * @param isAsc Indicates if sort direction ascending or non-ascengind (descending)
 */
export declare function sort(data: any[], sortBy?: string, isAsc?: boolean): any[];
/**
 * Compares two items (case-insensitive - used mainly for sorting).
 * @param a The first item to compare
 * @param b The second item to compare
 * @returns -1, 0 or 1
 */
export declare function compare(a: string | number, b: string | number): 1 | 0 | -1;
export declare function getUniqueElements(items: any[]): any[];
/**
 * Converts array of objects to Object
 * @param array array of object
 * @param key unique key present in each object in array
 */
export declare function arrayToObject(array: any[], key: string): any;
export declare function createPromiseWrapper(promise: any, metadata?: any): Promise<unknown>;
/**
 * @param strToParse A string value to parse according to the pattern, eg. mongodb connection string
 * @param pattern The pattern to be used for parsing, eg. /^mongodb:\/\/(.+):(.+)@(.+):(.+)\/((.*)\?.*)?$/;
 * @returns Array of strings.
 */
export declare function parseByPattern(strToParse: string, pattern: RegExp): string[];
/**
 * Trims charlist from left of str.
 * @param str A string value that the trim-left will be applied.
 * @param charlist A string value to be trimmed.
 */
export declare function trimLeft(str: string, charlist: string): string;
/**
 * Trims charlist from right of str.
 * @param str A string value that the trim-right will be applied.
 * @param charlist A string value to be trimmed.
 */
export declare function trimRight(str: string, charlist: string): string;
/**
 * Trims charlist from str.
 * @param str A string value that the trim will be applied.
 * @param charlist A string value to be trimmed.
 */
export declare function trim(str: string, charlist: string): string;
export declare function clone(obj: any): any;
interface ISlice {
    skip?: number;
    limit?: number;
}
export declare function sliceData(data: any[], { limit, skip }: ISlice): any[];
export {};
