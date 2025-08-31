import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  // At least 8 alphanumeric (uuid w/o dashes is 32 hex chars)
  const nonce = crypto.randomUUID().replace(/-/g, "");
  cookies().set("siwe", nonce, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return NextResponse.json({ nonce });
}