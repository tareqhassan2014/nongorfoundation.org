import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer/footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
