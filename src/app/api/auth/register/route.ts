import { CreateUserSchema } from "@/schemas/userSchemas";
import { authService } from "@/server/services/authService";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data: CreateUserSchema = await req.json();
    
    try {
        const user: User = await authService.register(data);
        return NextResponse.json({ user });
    } catch (err: any) {
        console.error("Error in auth POST:", err);
        return NextResponse.json({ error: err.message || "Register failed" }, { status: 401 });
    }
};