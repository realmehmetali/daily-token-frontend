import { NextRequest, NextResponse } from "next/server";
import { verifyCloudProof, type IVerifyResponse, type ISuccessResult } from "@worldcoin/minikit-js";

interface IRequestPayload {
  payload: ISuccessResult;
  action: string;
  signal?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { payload, action, signal } = (await req.json()) as IRequestPayload;

    const app_id = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID as `app_${string}`;
    if (!app_id) {
      return NextResponse.json({ error: "APP_ID missing" }, { status: 500 });
    }

    const verifyRes = (await verifyCloudProof(payload, app_id, action, signal)) as IVerifyResponse;

    if (verifyRes.success) {
      return NextResponse.json({ verifyRes, status: 200 });
    } else {
      return NextResponse.json({ verifyRes, status: 400 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "verify route error" }, { status: 500 });
  }
}