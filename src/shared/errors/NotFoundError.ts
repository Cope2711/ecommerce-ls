import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
  constructor(message: string, field?: string) {
    super(message, 404, field);
  }
}