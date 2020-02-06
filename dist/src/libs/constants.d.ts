export declare enum EnvVar {
    TEST = "test",
    LOCAL = "local",
    DEV = "dev",
    PROD = "prod"
}
export declare enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    UNPROCESSABLE = 422,
    INTERNAL_SERVER_ERROR = 500
}
export declare enum HttpMethod {
    GET = "GET",
    DELETE = "DELETE",
    PATCH = "PATCH",
    POST = "POST",
    PUT = "PUT"
}
export declare enum HttpRequestLocation {
    body = "body",
    cookies = "cookies",
    headers = "headers",
    params = "params",
    query = "query"
}
export declare enum StorageType {
    "Blob" = "Blob",
    "NoSQL" = "NoSQL",
    "SQL" = "SQL"
}
/**
 * !!! DEPRECATED !!!
 * Please use StorageType (without s)
 */
export declare enum StorageTypes {
    "Blob" = 0,
    "NoSQL" = 1,
    "SQL" = 2
}
export declare enum OperationalDataType {
    "ApplicationData" = 0,
    "ClientData" = 1,
    "ReferenceData" = 2
}
/**
 * !!! DEPRECATED !!!
 * Please use OperationalDataTypes (without s)
 */
export declare enum OperationalDataTypes {
    "ApplicationData" = 0,
    "ClientData" = 1,
    "ReferenceData" = 2
}
export declare enum DbType {
    "CosmosDB" = "CosmosDB",
    "MongoDB" = "MongoDB",
    "PostgreSQL" = "PostgreSQL"
}
