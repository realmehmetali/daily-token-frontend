"use client";

import { useMemo, useState } from "react";
import { IDKitWidget, VerificationResponse } from "@worldcoin/idkit";
import {
  useAccount, useChainId, useSwitchChain,
  useWriteContract, useConnect, useDisconnect, useConnectorClient
} from "wagmi";
import hubAbi from "@/abis/DailyClaimHub.json";

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
  const { connect, connectors, status: connectStatus } = useConnect();
  const { disconnect } = useDisconnect();
  useConnectorClient(); // ensures client present

  const [pending, setPending] = useState(false);

  const HUB    = useMemo(() => reqEnv("NEXT_PUBLIC_HUB") as `0x${string}`, []);
  const APP_ID = useMemo(() => reqEnv("NEXT_PUBLIC_WORLD_ID_APP_ID"), []);
  const ACTION = useMemo(() => reqEnv("NEXT_PUBLIC_WORLD_ID_ACTION"), []);

  async function ensureWorldchain() {
    if (chainId !== WORLDCHAIN_ID && switchChainAsync) {
      try { await switchChainAsync({ chainId: WORLDCHAIN_ID }); }
      catch { alert("Please switch to World Chain (ID 480)."); }
    }
  }

  async function handleSuccess(res: VerificationResponse) {
    try {
      setPending(true);
      await writeContractAsync({
        address: HUB,
        abi: (hubAbi as any).abi ?? hubAbi,
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

  // pick the injected connector (World App injects a provider inside the mini-app)
  const injectedConnector = connectors.find((c) => c.type === "injected") || connectors[0];

  return (
    <div className="p-4 border rounded-xl max-w-md">
      <h2 className="font-bold mb-2">Daily Claim</h2>

      {/* Connect / Disconnect */}
      {!isConnected ? (
        <button
          onClick={() => connect({ connector: injectedConnector })}
          className="mb-3 px-3 py-1.5 rounded-lg border"
        >
          {connectStatus === "pending" ? "Connecting…" : "Connect wallet"}
        </button>
      ) : (
        <div className="flex items-center gap-2 mb-3 text-sm">
          <span className="opacity-70">{address?.slice(0, 6)}…{address?.slice(-4)}</span>
          <button onClick={() => disconnect()} className="px-2 py-1 rounded border">
            Disconnect
          </button>
        </div>
      )}

      {/* Chain switch (if needed) */}
      {isConnected && chainId !== WORLDCHAIN_ID && (
        <button onClick={ensureWorldchain} className="mb-3 px-3 py-1.5 rounded-lg border">
          Switch to World Chain (480)
        </button>
      )}

      {/* Verified-only claim */}
      <IDKitWidget
        app_id={APP_ID}
        action={ACTION}
        signal={address ?? "0x0"}
        verification_level="orb"
        onSuccess={handleSuccess}
        onError={(err) => {
          console.error("World ID error:", err);
          const msg = typeof err === "string" ? err : (err as any)?.code || (err as any)?.message || JSON.stringify(err);
          alert("World ID error: " + msg);
        }}
      >
        {({ open }) => (
          <button
            onClick={() => {
              if (!isConnected) {
                connect({ connector: injectedConnector });
                return;
              }
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