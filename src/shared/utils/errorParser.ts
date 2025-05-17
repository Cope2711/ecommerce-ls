import { AxiosError } from "axios";
import { BaseError } from "../errors/BaseError";
import { BaseErrorResponse } from "../types/errors";

export function parseApiError(err: any) {
    const axiosError = err as AxiosError<BaseErrorResponse>;

    return new BaseError(
        axiosError.response?.data?.message || "Error desconocido",
        axiosError.response?.status || 500,
        axiosError.response?.data?.field
    );
}