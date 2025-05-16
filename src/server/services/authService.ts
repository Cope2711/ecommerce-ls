import { CreateUserSchema } from "@/schemas/userSchemas";
import { userService } from "./userService";
import { User } from "@prisma/client";

export const authService = {
    login: async (email: string, password: string) => {
        const user: User | null = await userService.getByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        if (user.password !== password) {
            throw new Error("Invalid password");
        }

        return user;
    },

    register: async (data: CreateUserSchema): Promise<User> => {
        const user = await userService.create(data);
        return user;
    },
}

