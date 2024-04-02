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
                    <ul className=" gap-1 py-5 w-full">
                        <li className=" flex justify-center items-center h-10 overflow-hidden mb-5 px-10">
                            <Image src={logoName} alt="..." className=" h-full w-auto " />
                        </li>
                        <Link href="/">
                            <li onClick={() => setActiveBtn('Home')} className={navItemClassNames('Home')}>
                                <DrawerClose className=" w-full h-full p-2 border-b-2 border-[#9c80e9]" >Home</DrawerClose>
                            </li>
                        </Link>
                        <ul className="border-b-2 border-[#9c80e9]">
                            <li >
                                <p className=" w-full h-full p-2 text-center">Information</p>
                            </li>
                            <Link href="/information/about">
                                <li onClick={() => setActiveBtn('About')} className={navItemClassNames('About')}>
                                    <DrawerClose className=" w-full h-full p-2" >About</DrawerClose>
                                </li>
                            </Link>
                            <Link href="/information/structure">
                                <li onClick={() => setActiveBtn('Structure')} className={navItemClassNames('Structure')}>
                                    <DrawerClose className=" w-full h-full p-2" >Structure</DrawerClose>
                                </li>
                            </Link>
                        </ul>
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerNavBar;