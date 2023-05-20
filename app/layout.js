import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashkan Sotoudeh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-30 w-full backdrop-blur duration-1000 bg-zinc-100/0">
          <div className="flex items-center justify-end h-16 md:h-20 pr-40 gap-12">
            <Link href="/">Home</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
