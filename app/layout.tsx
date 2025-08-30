import "./globals.css";
import Providers from "./providers";
import MiniKitProvider from "./minikit-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MiniKitProvider>{children}</MiniKitProvider>
        </Providers>
      </body>
    </html>
  );
}