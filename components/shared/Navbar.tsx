"use client"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";


const Navbar = () => {
	return (
		<div className="max-w-6xl mx-auto my-16">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/">Home</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink >Link</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink >Link</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

		</div>
	)
};



export default Navbar;