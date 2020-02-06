export enum EnvVar {
  TEST = "test",
  LOCAL = "local",
  DEV = "dev",
  PROD = "prod"
}

export enum HttpStatusCode {
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

export enum HttpMethod {
  GET = "GET",
  DELETE = "DELETE",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT"
}

export enum HttpRequestLocation {
  body = "body",
  cookies = "cookies",
  headers = "headers",
  params = "params",
  query = "query"
}

export enum StorageType {
  "Blob" = "Blob",
  "NoSQL" = "NoSQL",
  "SQL" = "SQL"
}

/**
 * !!! DEPRECATED !!!
 * Please use StorageType (without s)
 */
export enum StorageTypes {
  "Blob",
  "NoSQL",
  "SQL"
}

export enum OperationalDataType {
  "ApplicationData",
  "ClientData",
  "ReferenceData"
}
/**
 * !!! DEPRECATED !!!
 * Please use OperationalDataTypes (without s)
 */
export enum OperationalDataTypes {
  "ApplicationData",
  "ClientData",
  "ReferenceData"
}

export enum DbType {
  "CosmosDB" = "CosmosDB",
  "MongoDB" = "MongoDB",
  "PostgreSQL" = "PostgreSQL"
}
