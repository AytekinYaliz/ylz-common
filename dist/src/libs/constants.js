"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnvVar;
(function (EnvVar) {
    EnvVar["TEST"] = "test";
    EnvVar["LOCAL"] = "local";
    EnvVar["DEV"] = "dev";
    EnvVar["PROD"] = "prod";
})(EnvVar = exports.EnvVar || (exports.EnvVar = {}));
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["UNPROCESSABLE"] = 422] = "UNPROCESSABLE";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var HttpRequestLocation;
(function (HttpRequestLocation) {
    HttpRequestLocation["body"] = "body";
    HttpRequestLocation["cookies"] = "cookies";
    HttpRequestLocation["headers"] = "headers";
    HttpRequestLocation["params"] = "params";
    HttpRequestLocation["query"] = "query";
})(HttpRequestLocation = exports.HttpRequestLocation || (exports.HttpRequestLocation = {}));
var StorageType;
(function (StorageType) {
    StorageType["Blob"] = "Blob";
    StorageType["NoSQL"] = "NoSQL";
    StorageType["SQL"] = "SQL";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
/**
 * !!! DEPRECATED !!!
 * Please use StorageType (without s)
 */
var StorageTypes;
(function (StorageTypes) {
    StorageTypes[StorageTypes["Blob"] = 0] = "Blob";
    StorageTypes[StorageTypes["NoSQL"] = 1] = "NoSQL";
    StorageTypes[StorageTypes["SQL"] = 2] = "SQL";
})(StorageTypes = exports.StorageTypes || (exports.StorageTypes = {}));
var OperationalDataType;
(function (OperationalDataType) {
    OperationalDataType[OperationalDataType["ApplicationData"] = 0] = "ApplicationData";
    OperationalDataType[OperationalDataType["ClientData"] = 1] = "ClientData";
    OperationalDataType[OperationalDataType["ReferenceData"] = 2] = "ReferenceData";
})(OperationalDataType = exports.OperationalDataType || (exports.OperationalDataType = {}));
/**
 * !!! DEPRECATED !!!
 * Please use OperationalDataTypes (without s)
 */
var OperationalDataTypes;
(function (OperationalDataTypes) {
    OperationalDataTypes[OperationalDataTypes["ApplicationData"] = 0] = "ApplicationData";
    OperationalDataTypes[OperationalDataTypes["ClientData"] = 1] = "ClientData";
    OperationalDataTypes[OperationalDataTypes["ReferenceData"] = 2] = "ReferenceData";
})(OperationalDataTypes = exports.OperationalDataTypes || (exports.OperationalDataTypes = {}));
var DbType;
(function (DbType) {
    DbType["CosmosDB"] = "CosmosDB";
    DbType["MongoDB"] = "MongoDB";
    DbType["PostgreSQL"] = "PostgreSQL";
})(DbType = exports.DbType || (exports.DbType = {}));
//# sourceMappingURL=constants.js.map