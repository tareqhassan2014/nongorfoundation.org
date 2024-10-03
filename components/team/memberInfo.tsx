import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTelegramFill,
  RiTwitterXLine,
} from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

const MemberInfo = ({ ...item }) => {
  const size = 14;
  const items = "border-2 border-slate-300 rounded-full p-1 transition-all duration-300 ease-in-out text-slate-600 hover:scale-110 hover:text-green-400 ";
  return (
    <div key={item.id} className=" w-full lg:max-w-72">
      <div className=" group overflow-hidden relative flex flex-col items-center justify-center gap-3">
        <div className=" shadow-md shadow-green-500 h-20 w-20 rounded-full overflow-hidden">
          <Image src={item.img} alt="member img" />
        </div>
        {/* <div className="w-full h-full bg-slate-100 absolute top-1/4 left-0"></div> */}
        <div className=" py-2 group-hover:bg-green-100 group-hover:shadow-md shadow-green-500 w-full flex flex-col justify-center items-center gap-2 transition duration-300 ease-in">
          <h1 className=" font-semibold text-lg uppercase ">{item.name}</h1>
          <p className=" text-green-700 text-sm  ">{item.designation}</p>
          <div className=" flex gap-2">
            {item.contacts.email && (
              <Link href={item.contacts.email} className={items}>
                <MdOutlineEmail size={size} />
              </Link>
            )}
            {item.contacts.fb && (
              <Link href={item.contacts.fb} className={items}>
                <RiFacebookFill size={size} />
              </Link>
            )}
            {item.contacts.twitter && (
              <Link href={item.contacts.twitter} className={items}>
                <RiTwitterXLine size={size} />
              </Link>
            )}
            {item.contacts.telegram && (
              <Link href={item.contacts.telegram} className={items}>
                <RiTelegramFill size={size} />
              </Link>
            )}
            {item.contacts.instagram && (
              <Link href={item.contacts.instagram} className={items}>
                <RiInstagramFill size={size} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
