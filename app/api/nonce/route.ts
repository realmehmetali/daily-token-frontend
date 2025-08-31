import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function GET(_req: NextRequest) {
  const nonce = crypto.randomUUID().replace(/-/g, ""); // >= 8 alphanumeric

  // Store where client can't tamper
  cookies().set("siwe", nonce, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ nonce });
}