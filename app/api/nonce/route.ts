import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(_req: NextRequest) {
  const nonce = crypto.randomUUID().replace(/-/g, ""); // >= 8 alphanumerics
  // httpOnly cookie so the client can't tamper with it
  cookies().set("siwe", nonce, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return NextResponse.json({ nonce });
}