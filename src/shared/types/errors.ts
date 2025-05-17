export type BaseErrorResponse = {
    message: string;
    statusCode: number;
    field?: string;
};