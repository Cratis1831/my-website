import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashkan Sotoudeh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <Nav />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
