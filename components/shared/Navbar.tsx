import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-color.png";

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
		<div className="navbar">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<Image src={logo} height={90} width={150} alt="website logo" />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 flex">{GenerateMenu(Menu)}</ul>
			</div>
			<div className="navbar-end">
				<a className="btn btn-accent text-white rounded-none py-non">DONATE</a>
			</div>
		</div>
	);
};

export default Navbar;
