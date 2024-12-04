import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import LayoutComponents from "./_app";
import "./globals.css";
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

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        lang: "en" | "bn";
    };
}

export default function RootLayout({
    params,
    children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                <LayoutComponents children={children} lang={params.lang} />
                <TopButton />
            </body>
        </html>
    );
}
