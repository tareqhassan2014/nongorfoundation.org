import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Nogor Foundation.jpg";
import { Button } from "../ui/button";
import { GiCancel } from "react-icons/gi";

interface MenuItem {
	name: string;
	path: string;
	subMenu?: MenuItem[];
}

const Navbar = () => {
	const Menu: MenuItem[] = [
		{ name: "First", path: "/f" },
		{
			name: "Second",
			path: "/s",
			subMenu: [
				{
					name: "sub1",
					path: "/s1",
					subMenu: [
						{ name: "sub1", path: "/s1" },
						{ name: "sub2", path: "/s2" },
					],
				},
				{ name: "sub2", path: "/s2" },
			],
		},
		{ name: "Third", path: "/t" },
		{
			name: "Fourth",
			path: "/f",
			subMenu: [
				{ name: "sub1", path: "/s1" },
				{ name: "sub2", path: "/s2" },
			],
		},
	];

	const GenerateMenu = (array: MenuItem[]) => {
		return array.map((menu, i) =>
			menu.subMenu && menu.subMenu.length > 0 ? (
				<li key={i}>
					<details>
						<summary style={{ backgroundColor: "#e7e9ef00 !important" }}>{menu.name}</summary>
						<ul className="p-2">{GenerateMenu(menu.subMenu)}</ul>
					</details>
				</li>
			) : (
				<li key={i}>
					<Link href={menu.path} style={{ backgroundColor: "#e7e9ef00 !important" }}>
						{menu.name}
					</Link>
				</li>
			)
		);
	};

	return (
		<div className="navbar my-3">
			<div className="navbar-start">
				<Image src={logo} height={90} width={150} className="md:w-56" alt="website logo" />
			</div>
			{/* Menu */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 flex">{GenerateMenu(Menu)}</ul>
			</div>
			<div className=" navbar-end">
				{/* Navbar Drawer  */}
				<div className="drawer drawer-end">
					<input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
					{/* Drawer Button  */}
					<label
						tabIndex={0}
						role="button"
						htmlFor="navbar-drawer"
						className="btn btn-ghost lg:hidden  justify-end"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</label>

					{/* Drawer Content  */}
					<div className="drawer-side">
						<label htmlFor="navbar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

						<div className="p-4 w-80 min-h-full bg-base-200 text-base-content">
							<Link href="/">
								<Button variant="custom" size={"sm"}>
									Donate
								</Button>
							</Link>

							<ul className="menu menu-vertical mt-5">{GenerateMenu(Menu)}</ul>
						</div>
					</div>
				</div>

				{/* Donate Button */}
				<div className="hidden lg:block">
					<Link href={"/"}>
						<Button variant={"custom"}>Donate</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
