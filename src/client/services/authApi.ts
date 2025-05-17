import { LoginSchema } from "@/shared/schemas/authSchemas";
import { CreateUserSchema } from "@/shared/schemas/userSchemas";
import { parseApiError } from "@/shared/utils/errorParser";
import axios from "axios";

const authApi = {
    login: async (data: LoginSchema) => {
        try {
            const response = await axios.post("/api/auth/login", data);
            return response.data;
        } catch (err: any) {
            throw parseApiError(err);
        }
    },

    register: async (data: CreateUserSchema) => {
        try {
            const response = await axios.post("/api/auth/register", data);
            return response.data;
        } catch (err: any) {
            throw parseApiError(err);
        }
    },
};

export default authApi;