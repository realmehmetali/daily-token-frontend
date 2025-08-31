"use client";

import { PropsWithChildren } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { worldchain } from "viem/chains";

// Minimal wagmi config: use World Chain public RPC
const wagmiConfig = createConfig({
  chains: [worldchain],
  transports: {
    [worldchain.id]: http("https://worldchain-mainnet.g.alchemy.com/public"),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}