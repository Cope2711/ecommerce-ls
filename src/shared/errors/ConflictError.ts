import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {
    constructor(message: string, field?: string) {
        super(message, 409, field);
    }
}