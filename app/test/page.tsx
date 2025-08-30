"use client";

import { IDKitWidget } from "@worldcoin/idkit";

export default function TestPage() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold">World ID Test</h1>
      <IDKitWidget
        app_id={process.env.NEXT_PUBLIC_WORLD_ID_APP_ID!}
        action={process.env.NEXT_PUBLIC_WORLD_ID_ACTION!}
        signal="0x123"
        onSuccess={(res) => console.log("✅ Proof:", res)}
      >
        {({ open }) => (
          <button
            onClick={open}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            Open World ID
          </button>
        )}
      </IDKitWidget>
    </main>
  );
}