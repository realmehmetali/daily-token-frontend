// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { useEffect } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { APP_ID } from "@/lib/env";

export const metadata: Metadata = {
  title: "Daily Token",
};

function MiniKitBridge() {
  useEffect(() => {
    // Köprüyü kur
    MiniKit.install({ app_id: APP_ID });
    // Basit debug
    console.log("[MiniKit] installed?", MiniKit?.isInstalled?.());
  }, []);
  return null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MiniKitBridge />
        {children}
      </body>
    </html>
  );
}