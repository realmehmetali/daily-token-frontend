"use client";

import { http, createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
import { defineChain } from "viem";

export const worldchain = defineChain({
  id: 480,
  name: "World Chain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_RPC || "https://480.rpc.thirdweb.com"] },
    public:  { http: [process.env.NEXT_PUBLIC_RPC || "https://480.rpc.thirdweb.com"] },
  },
  blockExplorers: {
    default: { name: "Alchemy Explorer", url: "https://worldchain-mainnet-explorer.alchemy.com" },
  },
});

export const config = createConfig({
  chains: [worldchain],
  transports: { [worldchain.id]: http(worldchain.rpcUrls.default.http[0]) },
  connectors: [
    injected({
      shimDisconnect: true,         // smoother UX in webviews
      target: "metaMask",           // still works for World App’s injected provider
    }),
  ],
  ssr: true,
  autoConnect: true,                // <— important
});