import { db } from "../lib/db";
import { Prisma, User } from "@prisma/client";

export const userRepository = {
    findByEmail: async (email: string): Promise<User | null> => {
        return await db.user.findFirst({
            where: {
                email,
            },
        });
    },

    existByEmail: async (email: string): Promise<boolean> => {
        return await db.user.count({
            where: {
                email,
            },
        }) > 0;
    },

    existByUsername: async (username: string): Promise<boolean> => {
        return await db.user.count({
            where: {
                username,
            },
        }) > 0;
    },

    create: async (data: Prisma.UserCreateInput): Promise<User> => {
        return await db.user.create({
            data,
        });
    },
};