import React from "react";
import Image from "next/image";
import ibrahim from "@/public/ibrahim.jpeg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

interface IDeveloper {
  id: number;
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  facebook: string;
  twitter: string
}

const DevProfileCard: React.FC<IDeveloper> = ({ id, name, phone, email, github, linkedin, facebook, twitter, }) => {

  return (
    <div>
      <div className="  h-auto flex flex-col gap-3 md:p-0 p-4">
        {/* single card image*/}
        <div className=" border-2 border-black rounded-md flex justify-center items-center p-2">
          <div className=" sm:w-60 w-full ">
            <Image src={ibrahim} alt="ibrahim" className=" rounded-md " />
          </div>
        </div>

        {/* single card details*/}
        <div className=" flex flex-col gap-3 bg-slate-100 p-2 rounded-md md:hover:scale-110 hover:bg-gradient-to-r from-[#59BFDF] to-[#E739F5] group transition-all duration-300 ease-in ">
          <h2 className=" text-xl font-semibold uppercase group-hover:text-white">
            {name}
          </h2>
          <h4 className="group-hover:text-white">Occupation</h4>
          <div className=" flex gap-3 justify-start ">
            <Link href={github} className="border-2 hover:border-black hover:border-2 rounded-full p-2 ">
              <GitHubLogoIcon className=" scale-105 group-hover:scale-125 transition-all duration-300 ease-in" />
            </Link>
            <Link
              href={linkedin}
              className=" border-2 hover:border-black hover:border-2 rounded-full p-2"
            >
              <LinkedInLogoIcon className=" scale-105 group-hover:scale-125 transition-all duration-300 ease-in" />
            </Link>
            <Link
              href={twitter}
              className=" border-2 hover:border-black hover:border-2 rounded-full p-2"
            >
              <BsTwitterX className=" scale-105 group-hover:scale-125 transition-all duration-300 ease-in" />
            </Link>
            <Link
              href={facebook}
              className=" border-2 hover:border-black hover:border-2 rounded-full p-2"
            >
              <FaFacebook className=" scale-105 group-hover:scale-125 transition-all duration-300 ease-in " />
            </Link>
            <Link
              href="#"
              className=" border-2 hover:border-black hover:border-2 rounded-full p-2"
            >
              <BiRightArrowAlt className=" scale-105 group-hover:scale-125 transition-all duration-300 ease-in " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProfileCard;
