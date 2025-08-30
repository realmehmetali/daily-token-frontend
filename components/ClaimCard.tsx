"use client";

import { useMemo, useState } from "react";
import { IDKitWidget, VerificationResponse } from "@worldcoin/idkit";
import { useAccount, useChainId, useSwitchChain, useWriteContract } from "wagmi";
import hubAbi from "@/abis/DailyClaimHub.json";

type Props = {
  // Called after successful on-chain claim so the parent can animate/update UI
  onClaimed?: (payout: number, triple: boolean) => void;
  // Let parent render the exact button style (so it matches your design)
  children?: (open: () => void, pending: boolean) => React.ReactNode;
};

const WORLDCHAIN_ID = 480 as const;

// NOTE: envs must be referenced statically in Next
const HUB = process.env.NEXT_PUBLIC_HUB as `0x${string}`;
const APP_ID = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID!;
const ACTION = process.env.NEXT_PUBLIC_WORLD_ID_ACTION!;

export default function ClaimCard({ onClaimed, children }: Props) {
  const { address } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { writeContractAsync } = useWriteContract();
  const [pending, setPending] = useState(false);

  async function ensureWorldchain() {
    if (chainId !== WORLDCHAIN_ID && switchChainAsync) {
      try {
        await switchChainAsync({ chainId: WORLDCHAIN_ID });
      } catch {
        alert("Please switch to World Chain (ID 480) in your wallet.");
        throw new Error("Wrong chain");
      }
    }
  }

  async function handleSuccess(res: VerificationResponse) {
    await ensureWorldchain();
    setPending(true);
    try {
      // call claimVerified(merkle_root, nullifier_hash, proof)
      const txHash = await writeContractAsync({
        address: HUB,
        abi: (hubAbi as any).abi ?? hubAbi,
        functionName: "claimVerified",
        args: [res.merkle_root, res.nullifier_hash, res.proof],
      });

      console.log("claimVerified tx:", txHash);

      // Optional: if your hub emits Claimed(user, amount, totalClaims, level, triple),
      // you could read it from receipt logs. For now, pass a conservative hint
      // (parent can compute final numbers locally if desired).
      onClaimed?.(0 /* unknown exact */, false /* unknown until decoded */);

      alert("✅ Claimed successfully!");
    } catch (err: any) {
      console.error("claimVerified failed:", err);
      alert("❌ Claim failed: " + (err?.shortMessage || err?.message || "unknown"));
    } finally {
      setPending(false);
    }
  }

  return (
    <IDKitWidget
      app_id={APP_ID}
      action={ACTION}
      signal={address ?? "0x0"}
      verification_level="orb"     // ✅ verified-only
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
      {({ open }) =>
        children ? (
          children(open, pending)
        ) : (
          <button
            onClick={open}
            disabled={pending}
            className="px-4 py-2 bg-green-600 text-white rounded-xl disabled:opacity-60"
          >
            {pending ? "Claiming…" : "Claim with World ID"}
          </button>
        )
      }
    </IDKitWidget>
  );
}