"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import type { Chain } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/** Minimal World Chain definition (id 480). */
const worldchain: Chain = {
  id: 480,
  name: "World Chain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://worldchain-mainnet.g.alchemy.com/public"] },
    public: { http: ["https://worldchain-mainnet.g.alchemy.com/public"] },
  },
  blockExplorers: {
    default: { name: "World Scan", url: "https://worldscan.org" },
  },
} as const;

const config = createConfig({
  chains: [worldchain],
  transports: {
    [worldchain.id]: http(), // uses the chain's default RPC
  },
  ssr: true, // important for Next prerender
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}