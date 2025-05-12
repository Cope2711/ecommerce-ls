import { userService } from "./userService";

export const authService = {
    login: async (email: string, password: string) => {
        const user = await userService.getByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        if (user.password !== password) {
            throw new Error("Invalid password");
        }

        return user;
    },
}

