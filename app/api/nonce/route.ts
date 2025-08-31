import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Must be at least 8 alphanumeric chars
export async function GET(_req: NextRequest) {
  const nonce = crypto.randomUUID().replace(/-/g, "");
  cookies().set("siwe", nonce, { httpOnly: true, sameSite: "lax", secure: true, path: "/" });
  return NextResponse.json({ nonce });
}