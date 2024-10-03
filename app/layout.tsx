import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutComponents from "./_app";
import dynamic from "next/dynamic";
const TopButton = dynamic(() => import("@/components/ui/TopButton"), {
  ssr: false,
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nongor Foundation",
  description: "Nongor Foundation developed by Latent Talent",
  icons: {
    icon: "./Profile Photo logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <LayoutComponents children={children} />
        <TopButton />
      </body>
    </html>
  );
}
