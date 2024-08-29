import type { Metadata } from "next";
import { Fira_Code, Inter, Playfair_Display, Poppins,  } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import localFont from 'next/font/local'
import Sidebar from "../components/sidebar";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-fira'})
// const playFair = Poppins({subsets: ['latin'], weight: [ '400', '500', '600', '700'], variable: '--font-fira'})

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
      <body className={cn('antialised font-google', googleSans.className)}>
        <Providers>
          <Navbar />
          <div className="overflow-hidden m-0 p-0">
            <Sidebar />
            <div className="md:px-8 py-6 md:ml-[320px]">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
