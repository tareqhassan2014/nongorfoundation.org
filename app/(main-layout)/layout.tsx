import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="md:container mx-auto">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
