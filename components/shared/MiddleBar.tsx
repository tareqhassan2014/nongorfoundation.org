import React from "react";
import Name_logo from "@/public/Nogor Foundation.jpg";
import logo from "@/public/Profile Photo logo.jpg";
import Image from "next/image";
import Link from "next/link";
import DrawerNavBar from "./DrawerNavbar";

const MiddleBar = () => {
  const activeBtnClasses = " text-center w-auto text-xs md:text-base md:py-3 p-2 md:px-5 text-white bg-green-700 rounded-md ";

  return (
    <div className=" bg-white lg:pb-10 py-3 ">
      <div className=" container mx-auto">
        <div className=" flex justify-between items-center gap-3">
          {/* logo section */}
          <div className=" flex md:justify-start justify-between items-center lg:h-20 h-16 md:gap-5 gap-2">
            <div className=" lg:hidden block ">
              <DrawerNavBar />
            </div>
            <div className="h-full overflow-hidden flex justify-center items-center">
              <Image src={Name_logo} alt="logo" className=" md:block hidden max-h-full h-auto w-auto " />
              <Image src={logo} alt="logo" className=" md:hidden block max-h-full h-auto w-auto " />
            </div>
          </div>

          {/* button section */}
          <div className=" flex justify-between items-center gap-2 ">
            <Link href="#" className={activeBtnClasses}>
              My Account
            </Link>
            <Link href="#" className={activeBtnClasses}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
