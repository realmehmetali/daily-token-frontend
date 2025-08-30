"use client";
import { useEffect } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

export default function MiniKitProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    MiniKit.install(); // registers the bridge so sheets open inside World App
  }, []);
  return <>{children}</>;
}