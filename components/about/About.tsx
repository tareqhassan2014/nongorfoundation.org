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
            Nongor Foundation
          </h1>
        </div>
        <hr className=" bg-slate-300 my-3" />
        <p className=" py-2 text-justify">
          "Eternal conviction in building a prosperous society" - With this
          motto in mind, this progress is aimed at building a prosperous society
          in the service of humanity and the implementation of welfare work
          through cooperation. Social development is only possible with
          organized cooperation in this era of globalization. Therefore, if we
          can do something creative for the welfare of the socialized people by
          utilizing the development of thoughts, consciousness, and intellect of
          the organized people, the society will be prosperous, and the nation
          and the next generation will benefit. With the unwavering support and
          cooperation of the people from all walks of life in the area by
          incorporating the organizational wisdom of the people engaged in the
          work of building the society, this organization called "Nongor
          Foundation" was established, which will be operated as a
          non-political, non-profit voluntary social welfare organization
          InshaAllah.
        </p>

        {/* activites in about page */}
        <h1 className=" font-semibold tracking-wider text-green-700 mt-5 uppercase">
          Our Activities
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
                Human needs (Food, Housing, Clothing)
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.education} scroll={true}>
                Education
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.health} scroll={true}>
                Health
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.training} scroll={true}>
                Training
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.the_culture} scroll={true}>
                The Culture
              </Link>
            </motion.div>
            <motion.div
              variants={context.childrenAnimation}
              className={linkClassNames}
            >
              <p className={linkPointsClassNames}></p>
              <Link href={paths.activites.awareness} scroll={true}>
                Awareness
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
