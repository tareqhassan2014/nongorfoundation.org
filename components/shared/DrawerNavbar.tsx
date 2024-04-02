'use client'

import Link from "next/link";

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import logoName from '@/public/Nogor Foundation.jpg'
import Image from "next/image";

const DrawerNavBar: React.FC = () => {
    const [activeBtn, setActiveBtn] = useState<string>('Home')
    const navItemClassNames = (btnName: string) =>
        `${activeBtn === btnName ? "bg-green-700 text-white" : "hover:text-green-700 w-full"} rounded-md`;

    return (
        <Drawer>
            <DrawerTrigger className="  p-2 ">
                <RxHamburgerMenu className=" text-xl " />
            </DrawerTrigger>
            <DrawerContent>
                <div>
                    <ul className=" gap-1 py-5 w-full ">
                        <li className=" flex justify-center items-center h-10 overflow-hidden mb-5 px-10">
                            <Image src={logoName} alt="..." className=" h-full w-auto " />
                        </li>

                        <Link href="/">
                            <li onClick={() => setActiveBtn('Home')} className={navItemClassNames('Home')}><DrawerClose className=" w-full h-full p-2" >Home</DrawerClose></li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setActiveBtn('About')} className={navItemClassNames('About')}><DrawerClose className=" w-full h-full p-2">About</DrawerClose></li>
                        </Link>
                        <Link href="/projects" >
                            <li onClick={() => setActiveBtn('Projects')} className={navItemClassNames('Projects')}><DrawerClose className=" w-full h-full p-2">Projects</DrawerClose></li>
                        </Link>
                        <Link href="/donore">
                            <li onClick={() => setActiveBtn('Donore')} className={navItemClassNames('Donore')}><DrawerClose className=" w-full h-full p-2">Donore</DrawerClose></li>
                        </Link>
                        <Link href="/gallery/iftar-distribution">
                            <li onClick={() => setActiveBtn('Gallery')} className={navItemClassNames('Gallery')}><DrawerClose className=" w-full h-full p-2">Gallery</DrawerClose></li>
                        </Link>
                        <Link href="#">
                            <li onClick={() => setActiveBtn('Video')} className={navItemClassNames('Video')}><DrawerClose className=" w-full h-full p-2">Video</DrawerClose></li>
                        </Link>
                        <Link href="#">
                            <li onClick={() => setActiveBtn('Volunteer')} className={navItemClassNames('Volunteer')}><DrawerClose className=" w-full h-full p-2">Volunteer</DrawerClose></li>
                        </Link>
                        <Link href="/news">
                            <li onClick={() => setActiveBtn('News')} className={navItemClassNames('News')}><DrawerClose className=" w-full h-full p-2">News</DrawerClose></li>
                        </Link>
                        <Link href="/contact">
                            <li onClick={() => setActiveBtn('Contact')} className={navItemClassNames('Contact')}><DrawerClose className=" w-full h-full p-2">Contact</DrawerClose></li>
                        </Link>
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerNavBar;