import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-fira'})

const googleSans = localFont({
  src: [
    {
      path: '../../public/fonts/ProductSans-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/ProductSans-Bold.ttf',
      weight: '500'
    },
  ],
  variable: '--font-sans',
})


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
      <body className={cn('antialised font-sans', googleSans.className)}>
        <Providers>
          <Navbar />
          <div className="mt-16">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
