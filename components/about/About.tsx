"use client";

import Image from "next/image";
import React from "react";
import profileLogo from "@/public/Profile Photo logo.jpg";
// import office from "@/public/campaignImg/office.jpeg";
import Link from "next/link";
import { paths } from "@/utils/paths";
import { motion } from "framer-motion";
import { useCreatedContext } from "../context/Context";

const linkPointsClassNames =
  " h-3 w-3 bg-white group-hover:bg-green-800 border-2 border-green-700 rounded-full z-10 transition-all duration-500 ease-in";
const linkClassNames =
  " group flex justify-start items-center gap-2 hover:text-green-800 ";

const About: React.FC = () => {
  const { context, ref, inView } = useCreatedContext();

  return (
    <div className=" container mx-atuo py-20">
      {/* <div className=" lg:col-span-5 col-span-12 flex justify-center items-center">
        <div
          className=" h-full w-full rounded-md overflow-hidden "
          style={{
            backgroundImage: `url(${office.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div> */}
      <div className=" lg:col-span-7 col-span-12 md:px-5">
        <div className=" text-green-700 flex gap-5 items-center  ">
          <Image
            src={profileLogo}
            alt="foundation logo"
            className=" h-14 w-auto"
          />
          <h1 className=" font-semibold tracking-wider uppercase ">
            নোঙর ফাউন্ডেশন
          </h1>
        </div>
        <hr className=" bg-slate-300 my-3" />
        <p className=" py-2 text-justify">
           “সমৃদ্ধ সমাজ বিনির্মাণে অবিরাম প্রত্যয়” এই মূলমন্ত্রকে সামনে রেখে পারস্পারিক সহযোগিতার মাধ্যমে কল্যাণধর্মী কার্য বাস্তবায়ন ও মানবতার সেবায় সমৃদ্ধ সমাজ গঠনের মহৎ উদ্দেশ্যে নিয়ে এই অগ্রযাত্রা। বিশ্বায়নের এই যুগে সংঘবদ্ধ সহযোগিতা ছাড়া সমাজ উন্নয়ন সম্ভব নয়। তাই সংঘবদ্ধ মানুষের চিন্তা, চেতনা ও বুদ্ধির বিকাশকে কাজে লাগিয়ে সমাজবদ্ধ মানুষের কল্যাণের জন্য সৃজনশীল কিছু করতে পারলে সমৃদ্ধ হবে সমাজ উপকৃত হবে জাতি এবং আগামী প্রজন্ম। সমাজ গঠনের কাজে নিয়োজিত ব্যক্তিদের সাংগঠনিক প্রজ্ঞা সমন্বিত করে এলাকার সর্বস্তরের জনগণের অকুণ্ঠ সমর্থন ও সহযোগিতা নিয়ে রাষ্ট্রীয় বিধি বিধানের সাথে সংগতি রেখে ২০০৬ সালে এই ফাউন্ডেশনটি প্রতিষ্ঠিত হয়। যা একটি অরাজনৈতিক অলাভজনক স্বেচ্ছাসেবী সমাজকল্যাণমূলক সংগঠন হিসেবে কার্যক্রম পরিচালনা করবে ইনশাআল্লাহ।
        </p>

        {/* activites in about page */}
        <h1 className=" font-semibold tracking-wider text-green-700 mt-5 uppercase">
        আমাদের কার্যক্রম
        </h1>
        <hr className=" bg-slate-300 my-3" />
        <div className=" relative flex justify-start items-center gap-5 ">
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView={inView ? "show" : ""}
            viewport={{ once: true }}
            variants={context.parentAnimation}
            className=" grid grid-cols-2 gap-x-5 gap-y-1 "
          >
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.human_needs} scroll={true}>
              অবাব (অন্ন, বাসস্থান, বস্ত্র)
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.education} scroll={true}>
              শিক্ষা
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.health} scroll={true}>
              চিকিৎসা
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.training} scroll={true}>
              প্রশিক্ষণ
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.the_culture} scroll={true}>
              সাংস্কৃতি
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.awareness} scroll={true}>
                সচেতনতা 
              </Link>
            </motion.div>
          </motion.div>
          {/* <div className=" h-20 bg-slate-300 absolute top-2 left-[6px] w-[1px] "></div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
