import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-fira'})

const googleSans = localFont({
  src: [
    {
      path: '../../public/fonts/ProductSans-Black.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/ProductSans-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/ProductSans-Bold.ttf',
      weight: '500'
    },
  ],
  variable: '--font-google',
})


export const metadata: Metadata = {
  title: "Welcome to LawHub",
  description: "The Number One Interactive Law Learning Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialised font-google', googleSans.className)}>
        <Providers>
          { children}
        </Providers>
      </body>
    </html>
  );
}
