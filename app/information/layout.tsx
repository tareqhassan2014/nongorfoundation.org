import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MiddleBar from "@/components/shared/MiddleBar";
import NavBar from "@/components/shared/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <MiddleBar />
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}