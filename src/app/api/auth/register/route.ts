import { CreateUserSchema } from "@/shared/schemas/userSchemas";
import { authService } from "@/server/services/authService";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import { withErrorHandler } from "@/server/lib/utils/withErrorHandler";

export const POST = withErrorHandler(async (req: Request) => {
    const data: CreateUserSchema = await req.json();
    const user: User = await authService.register(data);
    return NextResponse.json({ user });
});