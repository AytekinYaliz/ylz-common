/****************************************************************************************
 * FUNCTIONAL OPERATIONS *
 ****************************************************************************************/

/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
export async function forEachSync(arr: any[], func: Function) {
  for (const item of arr) {
    await func(item);
  }
}

/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = await forEachSync(arr, func);
 */
export async function mapSync(arr: any[], func: Function) {
  const result = [];

  for (const item of arr) {
    result.push(await func(item));
  }

  return result;
}

/**
 * Polyfill functions. Needs to be called when app is loaded.
 * const utilities = require("./libs/utilities");
 * Called as: const arr2 = arr.forEachSync(func);
 */
// @ts-ignore
if (!Array.prototype.forEachSync) {
  // @ts-ignore
  Array.prototype.forEachSync = async function(callback /*, thisArg*/) {
    if (this == null) {
      throw new TypeError("'this' is null or not defined!!");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function!!");
    }

    for (const item of this) {
      await callback(item);
    }
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
  Array.prototype.mapSync = async function(callback /*, thisArg*/) {
    if (this == null) {
      throw new TypeError("'this' is null or not defined!!");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function!!");
    }

    const result = [];

    for (const item of this) {
      result.push(await callback(item));
    }

    return result;
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
export function negate(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

/**
 * Returns the value of a key in a given object
 * @param key 'key' to test.
 * @returns A Function that takes the object to test
 */
export function pluck(key: string) {
  return function(obj: any) {
    return obj[key];
  };
}

/**
 * Returns a new object with the lselected key/value pairs of a given object
 * @param keys 'key's to test.
 * @returns A Function that takes the object to test
 */
export function plucks(keys: string[]) {
  return (obj: any) => {
    const res: any = {};
    keys.forEach(k => {
      res[k] = obj[k];
    });
    return res;
  };
}

/**
 * Returns true if an item is the same as the other one.
 * @param x Item 1 to test.
 * @returns A Function that takes the second item to test
 */
export function isSame(x) {
  return function(y) {
    return x === y;
  };
}

export function isSameString(a: string, isCaseSensitive: boolean = false) {
  return function(b: string) {
    return a && b && (isCaseSensitive ? a === b : a.toLowerCase() === b.toLowerCase());
  };
}

/**
 * Returns true if existing entity has the specified id.
 * @param id 'id' to test.
 * @returns A Function that takes the object to test
 */
export function isSameEntity(id, isCaseSensitive: boolean = false) {
  return function isSameId(entity) {
    return id && entity && (isCaseSensitive ? entity.id === id : entity.id.toLowerCase() === id.toLowerCase());
  };
}

/**
 * Returns true if a field of an object is same as the item.
 * @param item Item to test.
 * @returns A Function that takes the field of the object to test
 */
export function isSameItemAsField(item) {
  return function(field) {
    return function(obj) {
      return obj[field] === item;
    };
  };
}

export function convertToCodeNameOutput(entity: any) {
  return {
    code: entity.code,
    name: entity.name
  };
}

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
export function getEnumKey(enums: any, enumValue: any): string | undefined {
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
export function getEnumByKeyOrValue(enums: any, enumKeyOrValue: any): string | number | undefined {
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

/**
 *
 * @param roles all user roles id's
 * @param recipients array of recepients sent by user containing roleId's and userId's
 * @param allowedDomains array of allowed Domain names
 * @returns empty string if all role Id's and userId' are correct, else returns incorrect role/user Id
 */
export function getInvalidRoleIds(roles: any, roleIds: string[]): string[] {
  return roleIds.filter(roleId => !roles.some(role => role.roleId === roleId));
}

export function getInvalidUserIds(users: any, userIds: string[]): string[] {
  return userIds.filter(userId => !users.some(isSameItemAsField(userId)("internalId")));
}

/**
 * Sorts a list of data (case-insensitive)
 * @param data The data to sort
 * @param sortBy The field that will be used in sorting
 * @param isAsc Indicates if sort direction ascending or non-ascengind (descending)
 */
export function sort(data: any[], sortBy?: string, isAsc: boolean = true) {
  return data.sort((a, b) => {
    return isAsc ? (sortBy ? compare(a[sortBy], b[sortBy]) : compare(a, b)) : sortBy ? compare(b[sortBy], a[sortBy]) : compare(b, a);
  });
}

/**
 * Compares two items (case-insensitive - used mainly for sorting).
 * @param a The first item to compare
 * @param b The second item to compare
 * @returns -1, 0 or 1
 */
export function compare(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    a = a.toLowerCase();
    b = b.toLowerCase();
  }

  return a === b ? 0 : a < b ? -1 : 1;
}

export function getUniqueElements(items): any[] {
  const uniqueSet = new Set();
  items.forEach(item => uniqueSet.add(item));
  return Array.from(uniqueSet.values());
}

/**
 * Converts array of objects to Object
 * @param array array of object
 * @param key unique key present in each object in array
 */
export function arrayToObject(array: any[], key: string) {
  return array.reduce((result, item) => {
    const id = item[key];
    result[id] = item;
    return result;
  }, {});
}

function isSameSimpleArrays(arr1, arr2): boolean {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }

  return arr1.every(item => arr2.includes(item));
}

export async function createPromiseWrapper(promise: any, metadata: any = null) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await promise;

      resolve([null, result, metadata]);
    } catch (err) {
      resolve([err, null, metadata]);
    }
  });
}

/**
 * @param strToParse A string value to parse according to the pattern, eg. mongodb connection string
 * @param pattern The pattern to be used for parsing, eg. /^mongodb:\/\/(.+):(.+)@(.+):(.+)\/((.*)\?.*)?$/;
 * @returns Array of strings.
 */
export function parseByPattern(strToParse: string, pattern: RegExp) {
  return strToParse.split(pattern).filter(Boolean);
}

/**
 * Trims charlist from left of str.
 * @param str A string value that the trim-left will be applied.
 * @param charlist A string value to be trimmed.
 */
export function trimLeft(str: string, charlist: string) {
  return str.replace(new RegExp("^[" + charlist + "]+"), "");
}
/**
 * Trims charlist from right of str.
 * @param str A string value that the trim-right will be applied.
 * @param charlist A string value to be trimmed.
 */
export function trimRight(str: string, charlist: string) {
  return str.replace(new RegExp("[" + charlist + "]+$"), "");
}
/**
 * Trims charlist from str.
 * @param str A string value that the trim will be applied.
 * @param charlist A string value to be trimmed.
 */
export function trim(str: string, charlist: string) {
  return trimLeft(trimRight(str, charlist), charlist);
}

export function clone(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

interface ISlice {
  skip?: number;
  limit?: number;
}
export function sliceData(data: any[], { limit = 1000, skip = 0 }: ISlice) {
  return limit === -1 ? data.slice(skip) : data.slice(skip, skip + limit);
}
