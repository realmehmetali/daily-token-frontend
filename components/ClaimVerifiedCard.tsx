"use client";

import { useMemo, useState } from "react";
import { IDKitWidget, VerificationResponse } from "@worldcoin/idkit";
import { useAccount, useChainId, useSwitchChain, useWriteContract } from "wagmi";
import hubAbi from "@/abis/DailyClaimHub.json";

// --- helpers ---
const WORLDCHAIN_ID = 480 as const;
function reqEnv(key: string): string {
  const v = process.env[key];
  if (!v) throw new Error(`Missing ${key} in .env.local`);
  return v;
}

export default function ClaimCard() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { writeContractAsync } = useWriteContract();

  const [pending, setPending] = useState(false);

  // read env once (throws early if misconfigured)
  const HUB = useMemo(() => reqEnv("NEXT_PUBLIC_HUB") as `0x${string}`, []);
  const APP_ID = useMemo(() => reqEnv("NEXT_PUBLIC_WORLD_ID_APP_ID"), []);
  const ACTION = useMemo(() => reqEnv("NEXT_PUBLIC_WORLD_ID_ACTION"), []);

  async function handleSuccess(res: VerificationResponse) {
    // You’ll also see proof fields in the console for debugging
    console.log("World ID proof:", res);

    try {
      setPending(true);
      await writeContractAsync({
        address: HUB,
        abi: (hubAbi as any).abi ?? hubAbi, // supports both {abi: [...]} and plain ABI
        functionName: "claimVerified",
        args: [res.merkle_root, res.nullifier_hash, res.proof],
      });
      alert("✅ Claimed successfully!");
    } catch (err: any) {
      console.error("claimVerified failed:", err);
      alert("❌ Claim failed: " + (err?.shortMessage || err?.message || "unknown"));
    } finally {
      setPending(false);
    }
  }

  async function ensureWorldchain() {
    if (chainId !== WORLDCHAIN_ID && switchChainAsync) {
      try {
        await switchChainAsync({ chainId: WORLDCHAIN_ID });
      } catch (e) {
        console.error(e);
        alert("Please switch to World Chain (ID 480) in your wallet.");
      }
    }
  }

  return (
    <div className="p-4 border rounded-xl max-w-md">
      <h2 className="font-bold mb-2">Daily Claim</h2>

      {/* Connection / chain hints (World App usually handles this for you) */}
      {!isConnected && (
        <p className="text-sm mb-3 opacity-70">
          Connect your wallet in World App to continue.
        </p>
      )}
      {isConnected && chainId !== WORLDCHAIN_ID && (
        <button
          onClick={ensureWorldchain}
          className="mb-3 px-3 py-1.5 rounded-lg border"
        >
          Switch to World Chain (480)
        </button>
      )}

      <IDKitWidget
        app_id={APP_ID}
        action={ACTION}
        signal={address ?? "0x0"}           // bind proof to wallet when present
        verification_level="orb"            // ✅ verified-only
        onSuccess={handleSuccess}
        onError={(err) => {
          console.error("World ID error:", err);
          const msg =
            typeof err === "string"
              ? err
              : (err as any)?.code ||
                (err as any)?.message ||
                JSON.stringify(err);
          alert("World ID error: " + msg);
        }}
      >
        {({ open }) => (
          <button
            onClick={() => {
              // optional: enforce chain before opening modal
              if (chainId !== WORLDCHAIN_ID) {
                ensureWorldchain().finally(open);
              } else {
                open();
              }
            }}
            disabled={pending}
            className="px-4 py-2 bg-green-600 text-white rounded-xl disabled:opacity-60"
          >
            {pending ? "Claiming…" : "Claim with World ID"}
          </button>
        )}
      </IDKitWidget>

      <p className="text-xs mt-3 opacity-60">
        Requires Orb verification · Network: World Chain (480)
      </p>
    </div>
  );
}