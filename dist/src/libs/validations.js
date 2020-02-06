"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/****************************************************************************************
 * MONGODB VALIDATIONS*
 ****************************************************************************************/
// mongoose.Types.ObjectId.isValid(id);
exports.isValidObjectId = (id) => new RegExp("^[0-9a-fA-F]{24}$").test(id);
/****************************************************************************************
 * TYPE VALIDATIONS *
 ****************************************************************************************/
/**
 * Returns true if existing entity has the spesified id.
 * @param id 'id' to test.
 * @returns A true if the value is null or undefined, false otherwise.
 */
function isNullOrUndefined(x) {
    return x === null || x === undefined;
}
exports.isNullOrUndefined = isNullOrUndefined;
/**
 * Returns true if field is null, empty or 0.
 * @param str 'str' to test.
 * @returns A Function that takes the field to test
 */
function isEmpty(val) {
    if (typeof val === "string") {
        return !val || 0 === val.trim().length;
    }
    if (val === 0) {
        return false;
    }
    return !val || 0 === val.length;
}
exports.isEmpty = isEmpty;
// export const isArray = value => (Array.isArray(value) && value.length ? true : false);
exports.isBoolean = (item) => typeof item === "boolean";
exports.isObject = (item) => item && typeof item === "object" && item.constructor === Object && Object.keys(item).length > 0;
exports.isPositiveInteger = (skip) => new RegExp("^(0*[1-9]+[0-9]*)$").test(skip);
exports.isString = (item) => typeof item === "string";
exports.isValidEmail = (email) => new RegExp("[a-zA-Z0-9_]+.[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[a-z]{1,8}").test(email);
exports.isValidUTCDate = date => /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z$/.test(date);
/**
 * Return true if date is correct and formatted
 * @param date date to test
 * @returns An invalid date object returns NaN for getTime() and NaN is the only object not strictly equal to itself
 */
function isValidDate(value, format = null) {
    try {
        if (isNullOrUndefined(format)) {
            return isNaN(new Date(value).getTime()) ? false : true;
        }
        else {
            // TODO: Coming soon.
            const parms = value.split(/[\-\/]/);
            const yyyy = parseInt(parms[2], 10);
            const mm = parseInt(parms[1], 10);
            const dd = parseInt(parms[0], 10);
            const date = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
            return mm === date.getMonth() + 1 && dd === date.getDate() && yyyy === date.getFullYear();
        }
    }
    catch (err) {
        return false;
    }
}
exports.isValidDate = isValidDate;
function isValidArrayOfIds(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => exports.isValidObjectId(item));
    }
    return false;
}
exports.isValidArrayOfIds = isValidArrayOfIds;
function isValidArrayOfNumbers(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => typeof item === "number");
    }
    return false;
}
exports.isValidArrayOfNumbers = isValidArrayOfNumbers;
function isValidArrayOfStrings(arr) {
    if (Array.isArray(arr)) {
        return arr.every(item => typeof item === "string");
    }
    return false;
}
exports.isValidArrayOfStrings = isValidArrayOfStrings;
exports.httpValidations = {
    checkDate: (paramName, HttprequestLocation = constants_1.HttpRequestLocation.params, isRequired = true) => {
        return {
            in: [HttprequestLocation],
            optional: !isRequired,
            custom: {
                options: (val) => isValidDate(val),
                errorMessage: `${paramName} should be a Valid Date!`
            }
        };
    },
    checkNumber: (paramName, HttprequestLocation = constants_1.HttpRequestLocation.params, isRequired = true) => {
        return {
            in: [HttprequestLocation],
            optional: !isRequired,
            custom: {
                options: id => {
                    const regex = RegExp(/\d/);
                    return regex.test(id);
                },
                errorMessage: `${paramName} should be a number!`
            }
        };
    },
    checkObjectId: (paramName, HttprequestLocation = constants_1.HttpRequestLocation.params, isRequired = true) => {
        return {
            in: [HttprequestLocation],
            optional: !isRequired,
            custom: {
                options: (id) => exports.isValidObjectId(id),
                errorMessage: `${paramName} should be an ObjectId!`
            }
        };
    },
    checkObjectIds: (paramName, HttprequestLocation = constants_1.HttpRequestLocation.body, isRequired = true) => {
        return {
            in: [HttprequestLocation],
            errorMessage: `${paramName} should be an array of ObjectIds!`,
            optional: !isRequired,
            isArray: true,
            custom: {
                options: (ids) => isValidArrayOfIds(ids),
                errorMessage: `${paramName} Bad Format!`
            }
        };
    },
    checkString: (paramName, HttprequestLocation, isRequired = true) => {
        return {
            in: [HttprequestLocation],
            errorMessage: `${paramName} should be a string!`,
            optional: !isRequired,
            isString: true
        };
    },
    checkStrings: (paramName, HttprequestLocation = constants_1.HttpRequestLocation.body, isRequired = true) => {
        return {
            in: [HttprequestLocation],
            errorMessage: `${paramName} should be an Array of strings!`,
            optional: !isRequired,
            isArray: true,
            custom: {
                options: (names) => isValidArrayOfStrings(names),
                errorMessage: `${paramName} should be a string!`
            }
        };
    }
};
//# sourceMappingURL=validations.js.map