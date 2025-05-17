import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor(message: string, field?: string) {
        super(message, 401, field);
    }
}