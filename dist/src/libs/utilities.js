"use strict";
/****************************************************************************************
 * FUNCTIONAL OPERATIONS *
 ****************************************************************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
function forEachSync(arr, func) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const item of arr) {
            yield func(item);
        }
    });
}
exports.forEachSync = forEachSync;
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
function mapSync(arr, func) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = [];
        for (const item of arr) {
            result.push(yield func(item));
        }
        return result;
    });
}
exports.mapSync = mapSync;
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = arr.forEachSync(func);
 */
// @ts-ignore
if (!Array.prototype.forEachSync) {
    // @ts-ignore
    Array.prototype.forEachSync = function (callback /*, thisArg*/) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this == null) {
                throw new TypeError("'this' is null or not defined!!");
            }
            if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function!!");
            }
            for (const item of this) {
                yield callback(item);
            }
        });
    };
}
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = arr.mapSync(func);
 */
// @ts-ignore
if (!Array.prototype.mapSync) {
    // @ts-ignore
    Array.prototype.mapSync = function (callback /*, thisArg*/) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this == null) {
                throw new TypeError("'this' is null or not defined!!");
            }
            if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function!!");
            }
            const result = [];
            for (const item of this) {
                result.push(yield callback(item));
            }
            return result;
        });
    };
}
/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = arr.pipe(func1, func2, func3);
 * All func parameters are predicates (boolean return functions).
 * Complexity is O(N).
 */
// @ts-ignore
// if (!Array.prototype.pipe) {
//   // @ts-ignore
//   Array.prototype.pipe = function(...callbacks /*, thisArg*/) {
//     if (this == null) {
//       throw new TypeError("'this' is null or not defined!!");
//     }
//     for (const cb of callbacks) {
//       if (typeof cb !== "function") {
//         throw new TypeError(cb + " is not a function!!");
//       }
//     }
//     const result = [];
//     for (const item of this) {
//       const list = [...callbacks];
//       let isEval = true;
//       while (list.length > 0 && isEval) {
//         isEval = list.shift()(item);
//       }
//       if (isEval) {
//         result.push(item);
//       }
//     }
//     return result;
//   };
// }
/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
function negate(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}
exports.negate = negate;
/**
 * Returns the value of a key in a given object
 * @param key 'key' to test.
 * @returns A Function that takes the object to test
 */
function pluck(key) {
    return function (obj) {
        return obj[key];
    };
}
exports.pluck = pluck;
/**
 * Returns a new object with the lselected key/value pairs of a given object
 * @param keys 'key's to test.
 * @returns A Function that takes the object to test
 */
function plucks(keys) {
    return (obj) => {
        const res = {};
        keys.forEach(k => {
            res[k] = obj[k];
        });
        return res;
    };
}
exports.plucks = plucks;
/**
 * Returns true if an item is the same as the other one.
 * @param x Item 1 to test.
 * @returns A Function that takes the second item to test
 */
function isSame(x) {
    return function (y) {
        return x === y;
    };
}
exports.isSame = isSame;
function isSameString(a, isCaseSensitive = false) {
    return function (b) {
        return a && b && (isCaseSensitive ? a === b : a.toLowerCase() === b.toLowerCase());
    };
}
exports.isSameString = isSameString;
/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
function isSameEntity(id, isCaseSensitive = false) {
    return function isSameId(entity) {
        return id && entity && (isCaseSensitive ? entity.id === id : entity.id.toLowerCase() === id.toLowerCase());
    };
}
exports.isSameEntity = isSameEntity;
/**
 * Returns true if a field of an object is same as the item.
 * @param item Item to test.
 * @returns A Function that takes the field of the object to test
 */
function isSameItemAsField(item) {
    return function (field) {
        return function (obj) {
            return obj[field] === item;
        };
    };
}
exports.isSameItemAsField = isSameItemAsField;
function convertToCodeNameOutput(entity) {
    return {
        code: entity.code,
        name: entity.name
    };
}
exports.convertToCodeNameOutput = convertToCodeNameOutput;
// /**
//  * Returns string representation of the key or value of the item in the enum list.
//  * !!! DEPRECATED. PLEASE USE getEnumByKeyOrValue() !!!
//  * @param enums Enum list.
//  * @param enumKeyOrValue Key or Value in the enum list.
//  * @returns A new object that has same structure as the input.
//  */
// export function getEnumKeyOrValue(enums: any, enumKeyOrValue: any) {
//   // return enums[enumKeyOrValue];
//   return getEnumByKeyOrValue(enums, enumKeyOrValue);
// }
/**
 * Returns string representation of the key of the given enum value.
 * @param enums Enum list.
 * @param enumValue Value in the enum list.
 * @returns string: if the value is in the enum list
 * undefined: if there is no match
 */
function getEnumKey(enums, enumValue) {
    let key;
    const keys = Object.keys(enums);
    keys
        .map(k => enums[k])
        .find((v, i) => {
        if (v === enumValue) {
            key = keys[i];
            return true;
        }
        return false;
    });
    return key;
}
exports.getEnumKey = getEnumKey;
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
function getEnumByKeyOrValue(enums, enumKeyOrValue) {
    let e;
    const keys = Object.keys(enums);
    keys.find((k, i) => {
        if (k === enumKeyOrValue) {
            e = enums[k];
            return true;
        }
        return false;
    });
    if (e === undefined) {
        keys
            .map(k => enums[k])
            .find((v, i) => {
            if (v === enumKeyOrValue) {
                e = enums[keys[i]];
                return true;
            }
            return false;
        });
    }
    return e;
}
exports.getEnumByKeyOrValue = getEnumByKeyOrValue;
/**
 *
 * @param roles all user roles id's
 * @param recipients array of recepients sent by user containing roleId's and userId's
 * @param allowedDomains array of allowed Domain names
 * @returns empty string if all role Id's and userId' are correct, else returns incorrect role/user Id
 */
function getInvalidRoleIds(roles, roleIds) {
    return roleIds.filter(roleId => !roles.some(role => role.roleId === roleId));
}
exports.getInvalidRoleIds = getInvalidRoleIds;
function getInvalidUserIds(users, userIds) {
    return userIds.filter(userId => !users.some(isSameItemAsField(userId)("internalId")));
}
exports.getInvalidUserIds = getInvalidUserIds;
/**
 * Sorts a list of data (case-insensitive)
 * @param data The data to sort
 * @param sortBy The field that will be used in sorting
 * @param isAsc Indicates if sort direction ascending or non-ascengind (descending)
 */
function sort(data, sortBy, isAsc = true) {
    return data.sort((a, b) => {
        return isAsc ? (sortBy ? compare(a[sortBy], b[sortBy]) : compare(a, b)) : sortBy ? compare(b[sortBy], a[sortBy]) : compare(b, a);
    });
}
exports.sort = sort;
/**
 * Compares two items (case-insensitive - used mainly for sorting).
 * @param a The first item to compare
 * @param b The second item to compare
 * @returns -1, 0 or 1
 */
function compare(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a === b ? 0 : a < b ? -1 : 1;
}
exports.compare = compare;
function getUniqueElements(items) {
    const uniqueSet = new Set();
    items.forEach(item => uniqueSet.add(item));
    return Array.from(uniqueSet.values());
}
exports.getUniqueElements = getUniqueElements;
/**
 * Converts array of objects to Object
 * @param array array of object
 * @param key unique key present in each object in array
 */
function arrayToObject(array, key) {
    return array.reduce((result, item) => {
        const id = item[key];
        result[id] = item;
        return result;
    }, {});
}
exports.arrayToObject = arrayToObject;
function isSameSimpleArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
        return false;
    }
    if (arr1.length === 0 && arr2.length === 0) {
        return true;
    }
    return arr1.every(item => arr2.includes(item));
}
function createPromiseWrapper(promise, metadata = null) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield promise;
                resolve([null, result, metadata]);
            }
            catch (err) {
                resolve([err, null, metadata]);
            }
        }));
    });
}
exports.createPromiseWrapper = createPromiseWrapper;
/**
 * @param strToParse A string value to parse according to the pattern, eg. mongodb connection string
 * @param pattern The pattern to be used for parsing, eg. /^mongodb:\/\/(.+):(.+)@(.+):(.+)\/((.*)\?.*)?$/;
 * @returns Array of strings.
 */
function parseByPattern(strToParse, pattern) {
    return strToParse.split(pattern).filter(Boolean);
}
exports.parseByPattern = parseByPattern;
/**
 * Trims charlist from left of str.
 * @param str A string value that the trim-left will be applied.
 * @param charlist A string value to be trimmed.
 */
function trimLeft(str, charlist) {
    return str.replace(new RegExp("^[" + charlist + "]+"), "");
}
exports.trimLeft = trimLeft;
/**
 * Trims charlist from right of str.
 * @param str A string value that the trim-right will be applied.
 * @param charlist A string value to be trimmed.
 */
function trimRight(str, charlist) {
    return str.replace(new RegExp("[" + charlist + "]+$"), "");
}
exports.trimRight = trimRight;
/**
 * Trims charlist from str.
 * @param str A string value that the trim will be applied.
 * @param charlist A string value to be trimmed.
 */
function trim(str, charlist) {
    return trimLeft(trimRight(str, charlist), charlist);
}
exports.trim = trim;
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;
function sliceData(data, { limit = 1000, skip = 0 }) {
    return limit === -1 ? data.slice(skip) : data.slice(skip, skip + limit);
}
exports.sliceData = sliceData;
//# sourceMappingURL=utilities.js.map