import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-fira'})

export const metadata: Metadata = {
  title: "Editor",
  description: "Testing Editors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialised font-sans', inter.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
