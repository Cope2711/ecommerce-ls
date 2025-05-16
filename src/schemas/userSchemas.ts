import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
