import { authService } from "@/server/services/authService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const user = await authService.login(email, password);
    return NextResponse.json({ user });
  } catch (err: any) {
    console.error("Error in auth POST:", err);
    return NextResponse.json({ error: err.message || "Login failed" }, { status: 401 });
  }
}