import axios from "axios";

const authApi = {
    login: async (email: string, password: string) => {
        try {
            const response = await axios.post("/api/auth", { email, password });
            return response.data; 
        } catch (err: any) {
            console.error("Error:", err.response?.data || err.message);
            throw new Error("Failed to login"); 
        }
    },
};

export default authApi;