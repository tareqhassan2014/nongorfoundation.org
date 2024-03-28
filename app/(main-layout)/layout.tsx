import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import MiddleBar from "@/components/shared/MiddleBar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<MiddleBar />
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
