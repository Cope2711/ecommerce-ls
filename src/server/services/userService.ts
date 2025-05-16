import { CreateUserSchema } from "@/schemas/userSchemas";
import { userRepository } from "@/server/repositories/userRepository";
import { Prisma, User } from "@prisma/client";

export const userService = {
    getByEmail: async (email: string): Promise<User | null> => {
        return await userRepository.findByEmail(email);
    },

    existByEmail: async (email: string): Promise<boolean> => {
        return await userRepository.existByEmail(email);
    },

    create: async (data: CreateUserSchema): Promise<User> => {
        if (await userService.existByEmail(data.email)) {
            throw new Error("Email already exists");
        }

        const userData: Prisma.UserCreateInput = {
            username: data.username,
            email: data.email,
            password: data.password,
        };

        return await userRepository.create(userData);
    },
};