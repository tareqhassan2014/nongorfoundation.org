"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar: React.FC = () => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const navItemClassNames =
		"py-2 hover:border-b-2 border-green-500 hover:text-green-500 transition-all duration-500 ease-in-out";

	const handleSubMenuEnterInfo = () => {
		setShowSubMenu(true);
	};
	const hideSubMenu = () => {
		setShowSubMenu(false);
	};

	useEffect(() => {
		// Function to handle clicks outside the submenu
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest(".submenu")) {
				setShowSubMenu(false);
			}
		};

		// Add event listener when component mounts
		document.body.addEventListener("click", handleClickOutside);

		// Clean up event listener when component unmounts
		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="bg-white mb-2 tracking-wider">
			<ul className="container mx-auto hidden lg:flex justify-start items-center gap-x-10 h-14 ">
				<li>
					<Link href="/" className={navItemClassNames}>
						Home
					</Link>
				</li>
				<li onMouseEnter={handleSubMenuEnterInfo} >
					<p className={navItemClassNames}>
						Information
					</p>
					{showSubMenu && (
						<ul className="submenu absolute mt-8 bg-white p-2 rounded shadow-md z-10" onMouseEnter={handleSubMenuEnterInfo}>
							<li onClick={hideSubMenu}>
								<Link href="/information/about" className="hover:text-green-500">About</Link>
							</li>
							<li onClick={hideSubMenu}>
								<Link href="/information/structure" className="hover:text-green-500">Structure</Link>
							</li>
						</ul>
					)}
				</li>
			</ul>
		</div>
	);
};

export default NavBar;


