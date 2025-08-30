// app/providers.tsx
"use client";

import { PropsWithChildren, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "viem/chains";

// Minimal, client-only wagmi config.
// We include mainnet just to satisfy wagmi types & SSR.
// We will NOT attempt to programmatically switch to World Chain here.
// (Users can be on World App’s injected provider already.)
const wagmiConfig = createConfig({
  ssr: true,
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(), // default public RPC for typing; not used for your txs
  },
});

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}