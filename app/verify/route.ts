import { NextRequest, NextResponse } from "next/server";
import { verifyCloudProof, type IVerifyResponse, type ISuccessResult } from "@worldcoin/minikit-js";

// Body must include: { payload, action, signal? }
interface IRequestPayload {
  payload: ISuccessResult;
  action: string;
  signal?: string;
}

export async function POST(req: NextRequest) {
  const { payload, action, signal } = (await req.json()) as IRequestPayload;

  const app_id = process.env.APP_ID as `app_${string}` | undefined;
  if (!app_id) {
    return NextResponse.json({ status: 500, error: "Missing APP_ID on server" }, { status: 500 });
  }

  try {
    const verifyRes = (await verifyCloudProof(payload, app_id, action, signal)) as IVerifyResponse;
    if (verifyRes.success) {
      // Optionally mark the user as verified in your DB here.
      return NextResponse.json({ verifyRes, status: 200 });
    } else {
      return NextResponse.json({ verifyRes, status: 400 }, { status: 400 });
    }
  } catch (e: any) {
    return NextResponse.json(
      { status: 500, error: e?.message ?? "verifyCloudProof call failed" },
      { status: 500 },
    );
  }
}