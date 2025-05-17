export class BaseError extends Error {
  public statusCode: number;
  public field?: string;

  constructor(message: string, statusCode: number, field?: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    this.field = field;
  }
}