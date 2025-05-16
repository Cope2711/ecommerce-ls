import { LoginSchema } from "@/schemas/authSchemas";
import { CreateUserSchema } from "@/schemas/userSchemas";
import axios from "axios";

const authApi = {
    login: async (data: LoginSchema) => {
        try {
            const response = await axios.post("/api/auth/login", data);
            return response.data;
        } catch (err: any) {
            console.error("Error:", err.response?.data || err.message);
            throw new Error("Failed to login");
        }
    },

    register: async (data: CreateUserSchema) => {
        try {
            const response = await axios.post("/api/auth/register", data);
            return response.data;
        } catch (err: any) {
            console.error("Error:", err.response?.data || err.message);
            throw new Error("Failed to register");
        }
    },
};

export default authApi;