import { userRepository } from "@/server/repositories/userRepository";

export const userService = {
    getByEmail: async (email: string) => {
        return await userRepository.findByEmail(email);
    }
};