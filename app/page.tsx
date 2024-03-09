import { paths } from "@/Routes/paths";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	console.log(paths.auth.login);
	return (
		<main className="flex h-full py-20 flex-col justify-center items-center bg-gradient-to-r from-[#59BFDF] to-[#E739F5]">
			<Button variant="outline">
				<Link href={paths.auth.login}>Sign In</Link>
			</Button>
		</main>
	);
}
