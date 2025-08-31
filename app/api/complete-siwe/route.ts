import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifySiweMessage, type MiniAppWalletAuthSuccessPayload } from "@worldcoin/minikit-js";

interface IRequestPayload {
  payload: MiniAppWalletAuthSuccessPayload;
  nonce: string;
}

export async function POST(req: NextRequest) {
  const { payload, nonce } = (await req.json()) as IRequestPayload;

  const cookieNonce = cookies().get("siwe")?.value;
  if (!cookieNonce || cookieNonce !== nonce) {
    return NextResponse.json({ status: "error", isValid: false, message: "Invalid nonce" }, { status: 400 });
  }

  try {
    const res = await verifySiweMessage(payload, nonce);
    // If you want a session, set a cookie or db flag here.
    return NextResponse.json({ status: "success", isValid: res.isValid });
  } catch (err: any) {
    return NextResponse.json(
      { status: "error", isValid: false, message: err?.message ?? "verifySiweMessage failed" },
      { status: 400 },
    );
  }
}