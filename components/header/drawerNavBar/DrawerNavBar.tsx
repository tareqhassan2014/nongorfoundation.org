"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import logoName from "@/public/Nogor-Foundation.png";
import Image from "next/image";
import { paths } from "@/utils/paths";

const DrawerNavBar: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<string>("Home");
  const navItemClassNames = (btnName: string) =>
    `${
      activeBtn === btnName
        ? "bg-green-700 text-white"
        : "hover:text-green-700 w-full"
    } rounded-md p-2 font-semibold`;

  return (
    <Drawer direction="left">
      <DrawerTrigger className=" flex justify-center items-center">
        <RxHamburgerMenu className=" w-10 h-12 hover:bg-slate-200 p-2  " />
      </DrawerTrigger>
      <DrawerContent className=" list-none min-w-60 w-auto ">
        <div>
          <ul className=" py-5 w-full ">
            <li className=" flex justify-center items-center h-10 overflow-hidden mb-5 ">
              <Image src={logoName} alt="..." className=" h-full w-auto " />
            </li>

            <Link href="/">
              <li
                onClick={() => setActiveBtn("Home")}
                className={navItemClassNames("Home")}
              >
                <DrawerClose className=" w-full h-full text-start px-1 ">
                  Home
                </DrawerClose>
              </li>
            </Link>
            <Accordion type="multiple" >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  onClick={() => setActiveBtn("information")}
                  className={navItemClassNames("information")}
                >
                  Information
                </AccordionTrigger>
                <AccordionContent>
                  <AccordionItem value="item-2">
                    <AccordionTrigger
                      onClick={() => setActiveBtn("about")}
                      className={`${navItemClassNames("about")} px-5`}
                    >
                      About
                    </AccordionTrigger>
                    <AccordionContent className=" pl-5 ">
                      <Link href={paths.information.introduction}>
                        <li>
                          <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                            Introduction
                          </DrawerClose>
                        </li>
                      </Link>
                      <Link href={paths.information.nature_of_the_organization}>
                        <li>
                          <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                            Nature of the organization
                          </DrawerClose>
                        </li>
                      </Link>
                      <Link href={paths.information.arena_limits}>
                        <li>
                          <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                            Arena limits
                          </DrawerClose>
                        </li>
                      </Link>
                      <Link href={paths.information.aims_and_objectives}>
                        <li>
                          <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                            Aims and Objectives
                          </DrawerClose>
                        </li>
                      </Link>
                      <Link href={paths.information.slogan}>
                        <li>
                          <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                            Slogan
                          </DrawerClose>
                        </li>
                      </Link>
                      <Link href={paths.information.vision}>
                        <li>
                          <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                            Vision
                          </DrawerClose>
                        </li>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <Link href={paths.information.structure}>
                    <li
                      onClick={() => setActiveBtn("structure")}
                      className={navItemClassNames("structure")}
                    >
                      <DrawerClose className=" w-full h-full text-start px-3">
                        Structure
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.team}>
                    <li
                      onClick={() => setActiveBtn("team")}
                      className={navItemClassNames("team")}
                    >
                      <DrawerClose className=" px-3 w-full h-full text-start ">
                        Team
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.faq}>
                    <li
                      onClick={() => setActiveBtn("faq")}
                      className={navItemClassNames("faq")}
                    >
                      <DrawerClose className="px-3 w-full h-full text-start ">
                        FAQ
                      </DrawerClose>
                    </li>
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger
                  onClick={() => setActiveBtn("activites")}
                  className={navItemClassNames("activites")}
                >
                  Activities
                </AccordionTrigger>
                <AccordionContent>
                  <Link href={paths.information.introduction}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Human needs (Food, Housing, Clothing)
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.nature_of_the_organization}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Nature of the organization
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.arena_limits}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Arena limits
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.aims_and_objectives}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Aims and Objectives
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.slogan}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Slogan
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.vision}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Vision
                      </DrawerClose>
                    </li>
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger
                  onClick={() => setActiveBtn("registration")}
                  className={navItemClassNames("registration")}
                >
                  Registration
                </AccordionTrigger>
                <AccordionContent>
                  <Link href={paths.information.introduction}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Introduction
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.nature_of_the_organization}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Nature of the organization
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.arena_limits}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Arena limits
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.aims_and_objectives}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Aims and Objectives
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.slogan}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Slogan
                      </DrawerClose>
                    </li>
                  </Link>
                  <Link href={paths.information.vision}>
                    <li>
                      <DrawerClose className=" w-full h-full pl-6 py-2 hover:text-green-700 text-start ">
                        Vision
                      </DrawerClose>
                    </li>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href={paths.campaign}>
              <li
                onClick={() => setActiveBtn("Campaign")}
                className={navItemClassNames("Campaign")}
              >
                <DrawerClose className=" w-full h-full text-start px-1 ">
                  Campaign
                </DrawerClose>
              </li>
            </Link>
            <Link href={paths.news}>
              <li
                onClick={() => setActiveBtn("News")}
                className={navItemClassNames("News")}
              >
                <DrawerClose className=" w-full h-full text-start px-1 ">
                  News
                </DrawerClose>
              </li>
            </Link>
            <Link href={paths.donate}>
              <li
                onClick={() => setActiveBtn("Volunteer")}
                className={navItemClassNames("Volunteer")}
              >
                <DrawerClose className=" w-full h-full text-start px-1 ">
                  Donate
                </DrawerClose>
              </li>
            </Link>
            <Link href={paths.contact}>
              <li
                onClick={() => setActiveBtn("Contact")}
                className={navItemClassNames("Contact")}
              >
                <DrawerClose className=" w-full h-full text-start px-1 ">
                  Contact
                </DrawerClose>
              </li>
            </Link>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNavBar;
