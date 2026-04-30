/**
 * Wraps any non-2xx response from the Modly API. The `status` is the HTTP
 * status code; `code` is the machine-readable error string in the body
 * (e.g. `forbidden`, `not_found`); `body` is the parsed JSON body or null.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly body: unknown;
  constructor(status: number, code: string, body: unknown) {
    super(`${status} ${code}`);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.body = body;
  }
}
