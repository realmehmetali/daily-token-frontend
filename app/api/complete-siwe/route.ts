import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifySiweMessage, type MiniAppWalletAuthSuccessPayload } from "@worldcoin/minikit-js";

interface IRequestPayload {
  payload: MiniAppWalletAuthSuccessPayload;
  nonce: string;
}

export async function POST(req: NextRequest) {
  const { payload, nonce } = (await req.json()) as IRequestPayload;

  // Check nonce matches the one we issued (stored server-side in httpOnly cookie)
  if (nonce !== cookies().get("siwe")?.value) {
    return NextResponse.json({ status: "error", isValid: false, message: "Invalid nonce" });
  }

  try {
    const result = await verifySiweMessage(payload, nonce);
    return NextResponse.json({ status: "success", isValid: result.isValid });
  } catch (err: any) {
    return NextResponse.json({ status: "error", isValid: false, message: err?.message ?? "verify failed" });
  }
}