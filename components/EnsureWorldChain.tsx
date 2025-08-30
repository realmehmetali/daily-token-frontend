"use client";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { worldchain } from "@/lib/wagmi";

export default function EnsureWorldChain({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();

  if (!isConnected) return <>{children}</>; // wallet not connected yet

  if (chainId !== worldchain.id) {
    return (
      <button
        onClick={() => switchChain({ chainId: worldchain.id })}
        disabled={isPending}
        className="px-4 py-2 rounded-lg border bg-yellow-100 font-semibold"
      >
        {isPending ? "Switching…" : "Switch to World Chain"}
      </button>
    );
  }

  return <>{children}</>;
}