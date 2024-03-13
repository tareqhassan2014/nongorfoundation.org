import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

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
