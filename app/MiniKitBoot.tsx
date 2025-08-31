// app/providers.tsx
"use client";

import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  // No MiniKit.init here – not needed for your installed version.
  return <>{children}</>;
}