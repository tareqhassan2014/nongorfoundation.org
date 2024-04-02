"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar: React.FC = () => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const navItemClassNames =
		"py-2 hover:border-b-2 border-green-500 text-white hover:text-green-500 transition-all duration-500 ease-in-out";

	const handleSubMenuEnter = () => {
		setShowSubMenu(true);
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
		<div className="bg-green-900 mb-2 tracking-wider">
			<ul className="container mx-auto hidden lg:flex justify-start items-center gap-x-10 h-14 ">
				<li onMouseEnter={handleSubMenuEnter} >
					<Link href="/" className={navItemClassNames}>
						Home
					</Link>
				</li>
				<li onMouseEnter={handleSubMenuEnter} >
					<Link href="/about" className={navItemClassNames}>
						About
					</Link>
					{showSubMenu && (
						<ul className="submenu absolute mt-8 bg-white p-2 rounded shadow-md z-10" onMouseEnter={handleSubMenuEnter}>
							<li>
								<Link href="/sub-menu-item-1">Nav 1</Link>
							</li>
						</ul>
					)}
				</li>
			</ul>
		</div>
	);
};

export default NavBar;


