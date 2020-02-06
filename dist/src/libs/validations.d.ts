import { HttpRequestLocation } from "./constants";
/****************************************************************************************
 * MONGODB VALIDATIONS*
 ****************************************************************************************/
export declare const isValidObjectId: (id: any) => boolean;
/****************************************************************************************
 * TYPE VALIDATIONS *
 ****************************************************************************************/
/**
 * Returns true if existing entity has the spesified id.
 * @param id 'id' to test.
 * @returns A true if the value is null or undefined, false otherwise.
 */
export declare function isNullOrUndefined(x: any): boolean;
/**
 * Returns true if field is null, empty or 0.
 * @param str 'str' to test.
 * @returns A Function that takes the field to test
 */
export declare function isEmpty(val: any): boolean;
export declare const isBoolean: (item: any) => boolean;
export declare const isObject: (item: any) => boolean;
export declare const isPositiveInteger: (skip: string) => boolean;
export declare const isString: (item: any) => boolean;
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidUTCDate: (date: any) => boolean;
/**
 * Return true if date is correct and formatted
 * @param date date to test
 * @returns An invalid date object returns NaN for getTime() and NaN is the only object not strictly equal to itself
 */
export declare function isValidDate(value: any, format?: any): boolean;
export declare function isValidArrayOfIds(arr: string[]): boolean;
export declare function isValidArrayOfNumbers(arr: number[]): boolean;
export declare function isValidArrayOfStrings(arr: string[]): boolean;
export declare const httpValidations: {
    checkDate: (paramName: any, HttprequestLocation?: HttpRequestLocation, isRequired?: boolean) => {
        in: HttpRequestLocation[];
        optional: boolean;
        custom: {
            options: (val: string) => boolean;
            errorMessage: string;
        };
    };
    checkNumber: (paramName: any, HttprequestLocation?: HttpRequestLocation, isRequired?: boolean) => {
        in: HttpRequestLocation[];
        optional: boolean;
        custom: {
            options: (id: any) => boolean;
            errorMessage: string;
        };
    };
    checkObjectId: (paramName: any, HttprequestLocation?: HttpRequestLocation, isRequired?: boolean) => {
        in: HttpRequestLocation[];
        optional: boolean;
        custom: {
            options: (id: string) => boolean;
            errorMessage: string;
        };
    };
    checkObjectIds: (paramName: any, HttprequestLocation?: HttpRequestLocation, isRequired?: boolean) => {
        in: HttpRequestLocation[];
        errorMessage: string;
        optional: boolean;
        isArray: boolean;
        custom: {
            options: (ids: string[]) => boolean;
            errorMessage: string;
        };
    };
    checkString: (paramName: any, HttprequestLocation: any, isRequired?: boolean) => {
        in: any[];
        errorMessage: string;
        optional: boolean;
        isString: boolean;
    };
    checkStrings: (paramName: any, HttprequestLocation?: HttpRequestLocation, isRequired?: boolean) => {
        in: HttpRequestLocation[];
        errorMessage: string;
        optional: boolean;
        isArray: boolean;
        custom: {
            options: (names: string[]) => boolean;
            errorMessage: string;
        };
    };
};
