"use client";

import { IDKitWidget, type ISuccessResult } from "@worldcoin/idkit";

// ✅ Read env into typed constants
const APP_ID = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID as `app_${string}`;
const ACTION = process.env.NEXT_PUBLIC_WORLD_ID_ACTION as string;

export default function TestPage() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold">World ID Test</h1>

      <IDKitWidget
        app_id={APP_ID}
        action={ACTION}
        signal="0x123"
        onSuccess={(res: ISuccessResult) => {
          console.log("✅ Proof:", res);
          alert("Proof captured. You can now call claimVerified on-chain.");
        }}
        onError={(err) => {
          console.error("World ID error:", err);
          alert("World ID error: " + (typeof err === "string" ? err : (err as any)?.message ?? "unknown"));
        }}
      >
        {({ open }) => (
          <button
            onClick={open}
            className="px-4 py-2 rounded-xl bg-black text-white"
          >
            Open IDKit
          </button>
        )}
      </IDKitWidget>
    </main>
  );
}