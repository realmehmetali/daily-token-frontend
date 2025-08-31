"use client";

import { ReactNode, useEffect } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { worldchain } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CHAIN_ID } from "@/lib/env";

const client = new QueryClient();

// Minimal client config; we rely on World App's injected provider
const wagmiConfig = createConfig({
  chains: [worldchain],
  transports: { [worldchain.id]: http() },
  ssr: true,
});

export function Providers({ children }: { children: ReactNode }) {
  // Optional: guard for MiniKit presence
  useEffect(() => {
    // no-op; MiniKit webview bridge loads in World App
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}