import { withErrorHandler } from "@/server/lib/utils/withErrorHandler";
import { authService } from "@/server/services/authService";
import { NextResponse } from "next/server";

export const POST = withErrorHandler(async (req: Request) => {
  const { email, password } = await req.json();
  const user = await authService.login(email, password);
  return NextResponse.json({ user });
});