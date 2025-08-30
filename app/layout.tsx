// frontend/app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";

export const metadata = { title: "Daily Token" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}