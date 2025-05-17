import { CreateUserSchema } from "@/shared/schemas/userSchemas";
import { userService } from "./userService";
import { User } from "@prisma/client";
import { UnauthorizedError } from "../../shared/errors/UnauthorizedError";

export const authService = {
    login: async (email: string, password: string) => {
        const user: User = await userService.getByEmailThrowsNotFound(email);

        if (user.password !== password) {
            throw new UnauthorizedError("Invalid password", "password");
        }

        return user;
    },

    register: async (data: CreateUserSchema): Promise<User> => {
        const user = await userService.create(data);
        return user;
    },
}

