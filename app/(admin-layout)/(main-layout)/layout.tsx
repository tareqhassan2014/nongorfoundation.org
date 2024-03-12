import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
