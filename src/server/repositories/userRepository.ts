import { db } from "../lib/db";

export const userRepository = {
    findByEmail: async (email: string) => {
        return await db.user.findFirst({
            where: {
                email,
            },
        });
    }
};