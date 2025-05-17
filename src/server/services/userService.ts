import { CreateUserSchema } from "@/shared/schemas/userSchemas";
import { userRepository } from "@/server/repositories/userRepository";
import { Prisma, User } from "@prisma/client";
import { NotFoundError } from "../../shared/errors/NotFoundError";
import { ConflictError } from "@/shared/errors/ConflictError";

export const userService = {
    getByEmail: async (email: string): Promise<User | null> => {
        return await userRepository.findByEmail(email);
    },

    getByEmailThrowsNotFound: async (email: string): Promise<User> => {
        const user = await userService.getByEmail(email);
        
        if (!user) {
            throw new NotFoundError("User not found", "email");
        }

        return user;
    },

    existByEmail: async (email: string): Promise<boolean> => {
        return await userRepository.existByEmail(email);
    },

    existByUsername: async (username: string): Promise<boolean> => {
        return await userRepository.existByUsername(username);
    },

    create: async (data: CreateUserSchema): Promise<User> => {
        if (await userService.existByUsername(data.username)) {
            throw new ConflictError("Username already exists", "username");
        }

        if (await userService.existByEmail(data.email)) {
            throw new ConflictError("Email already exists", "email");
        }

        const userData: Prisma.UserCreateInput = {
            username: data.username,
            email: data.email,
            password: data.password,
        };

        return await userRepository.create(userData);
    },
};