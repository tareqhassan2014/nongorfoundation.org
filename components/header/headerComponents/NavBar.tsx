import Name_logo from "@/public/Nogor-Foundation.png";
import { ChevronDown } from "lucide-react";

import { getDictionary } from "@/app/dictionary/dictionaries";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { paths } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import AuthComponent from "../authComponent/AuthComponent";
import DrawerNavBar from "../drawerNavBar/DrawerNavBar";
import SearchButton from "../searchButton/SearchButton";
import TopBar from "./TopBar";

const navItemClassNames =
    " cursor-pointer p-2 text-green-800 font-semibold hover:text-black hover:bg-green-100 rounded-md transition-all duration-500 ease-in-out";

interface NavBarProps {
    lan: "bn" | "en";
}

const NavBar = async ({ lan }: NavBarProps) => {
    const dict = await getDictionary(lan);

    return (
        <div className=" sticky top-0 w-full bg-white z-30">
            <div className=" flex justify-center items-center gap-3">
                <div className=" lg:hidden px-5 py-2 flex justify-start items-center gap-5 h-full w-full ">
                    {/* <div  lg:hidden block> */}
                    <DrawerNavBar />
                    {/* </div> */}
                    <Image
                        src={Name_logo}
                        alt="logo"
                        className=" h-auto md:w-96 w-60 "
                    />
                </div>

                <div className=" lg:flex hidden px-5 justify-start items-center gap-5 h-full ">
                    <Image
                        src={Name_logo}
                        alt="logo"
                        className=" h-auto md:w-96 w-60 "
                    />
                </div>
                <div className=" w-full hidden lg:flex flex-col">
                    <TopBar />

                    <div className=" relative flex justify-between items-center text-sm h-14 bg-green-50">
                        <ul className=" flex justify-start items-center">
                            <li className={navItemClassNames}>
                                <Link href={paths.home}>হোম</Link>
                            </li>
                            <li className={navItemClassNames}>
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <div className=" flex justify-between items-center gap-2">
                                            <span>তথ্য</span>
                                            <ChevronDown className=" h-4 w-4 " />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                আমাদের সম্পর্কে
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <Link
                                                        href={
                                                            paths.information
                                                                .introduction
                                                        }
                                                    >
                                                        <DropdownMenuItem>
                                                            ভূমিকা
                                                        </DropdownMenuItem>
                                                    </Link>
                                                    <Link
                                                        href={
                                                            paths.information
                                                                .nature_of_the_organization
                                                        }
                                                    >
                                                        <DropdownMenuItem>
                                                            সংগঠনের প্রকৃতি
                                                        </DropdownMenuItem>
                                                    </Link>
                                                    <Link
                                                        href={
                                                            paths.information
                                                                .arena_limits
                                                        }
                                                    >
                                                        <DropdownMenuItem>
                                                            কর্মক্ষেত্রের সীমা
                                                        </DropdownMenuItem>
                                                    </Link>
                                                    <Link
                                                        href={
                                                            paths.information
                                                                .aims_and_objectives
                                                        }
                                                    >
                                                        <DropdownMenuItem>
                                                            লক্ষ্য ও উদ্দেশ্য
                                                        </DropdownMenuItem>
                                                    </Link>
                                                    <Link
                                                        href={
                                                            paths.information
                                                                .slogan
                                                        }
                                                    >
                                                        <DropdownMenuItem>
                                                            স্লোগান
                                                        </DropdownMenuItem>
                                                    </Link>
                                                    <Link
                                                        href={
                                                            paths.information
                                                                .vision
                                                        }
                                                    >
                                                        <DropdownMenuItem>
                                                            ভিশন
                                                        </DropdownMenuItem>
                                                    </Link>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <Link
                                            href={paths.information.structure}
                                        >
                                            <DropdownMenuItem>
                                                সংস্থার কাঠামো
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href={paths.information.team}>
                                            <DropdownMenuItem>
                                                টিম
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href={paths.information.faq}>
                                            <DropdownMenuItem>
                                                প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>

                            <li className={navItemClassNames}>
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <div className=" flex justify-between items-center gap-2">
                                            <span>কার্যক্রম</span>
                                            <ChevronDown className=" h-4 w-4 " />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Link
                                            href={paths.activites.human_needs}
                                            scroll={true}
                                        >
                                            <DropdownMenuItem>
                                                অবাব (অন্ন, বাসস্থান, বস্ত্র)
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={paths.activites.education}
                                            scroll={true}
                                        >
                                            <DropdownMenuItem>
                                                শিক্ষা
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={paths.activites.health}
                                            scroll={true}
                                        >
                                            <DropdownMenuItem>
                                                চিকিৎসা
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={paths.activites.training}
                                            scroll={true}
                                        >
                                            <DropdownMenuItem>
                                                প্রশিক্ষণ
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={paths.activites.the_culture}
                                            scroll={true}
                                        >
                                            <DropdownMenuItem>
                                                সাংস্কৃতি
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={paths.activites.awareness}
                                            scroll={true}
                                        >
                                            <DropdownMenuItem>
                                                সচেতনতা
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>

                            <li className={navItemClassNames}>
                                <Link href={paths.campaign}>প্রচারণা</Link>
                            </li>

                            <li className={navItemClassNames}>
                                <Link href={paths.news}>সংবাদ</Link>
                            </li>
                            <li className={navItemClassNames}>
                                <Link href={paths.contact}>{dict.contact}</Link>
                            </li>
                        </ul>
                        <ul className=" flex justify-start items-center gap-2">
                            <li>
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <p className=" cursor-pointer py-2 px-5 text-white rounded-md bg-green-800 hover:bg-green-700 transition-all duration-300 ease-in">
                                            নিবন্ধন করুন
                                        </p>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Link
                                            href={paths.registration.volunteer}
                                        >
                                            <DropdownMenuItem>
                                                স্বেচ্ছাসেবক
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={
                                                paths.registration
                                                    .ordinary_member
                                            }
                                        >
                                            <DropdownMenuItem>
                                                সাধারণ সদস্য
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={
                                                paths.registration
                                                    .lifetime_member
                                            }
                                        >
                                            <DropdownMenuItem>
                                                আজীবন সদস্য
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href={
                                                paths.registration.donor_member
                                            }
                                        >
                                            <DropdownMenuItem>
                                                দাতা সদস্য
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li className=" cursor-pointer py-2 px-5 text-white rounded-md bg-green-800 hover:bg-green-700 transition-all duration-300 ease-in">
                                <Link href={paths.donate}>দান করুন</Link>
                            </li>

                            <SearchButton />
                        </ul>

                        {/* auth components  */}
                        <AuthComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
