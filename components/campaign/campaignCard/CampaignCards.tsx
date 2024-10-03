'use client'

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { campaignDatas } from "@/api/campaign/campaignData";
import { motion } from "framer-motion";
import { useCreatedContext } from "@/components/context/Context";

const CampaignCards = () => {
  const { context, ref, inView } = useCreatedContext();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView={inView? "show" : ""}
      viewport={{ once: true }}
      variants={context.parentAnimation}
      className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
    >
      {campaignDatas &&
        campaignDatas.map((item, index) => (
          <motion.div
            variants={context.childrenAnimation}
            key={index}
            className=" rounded-lg bg-white hover:shadow-xl shadow-black"
          >
            <div className=" h-52 overflow-hidden flex justify-center items-center rounded-md">
              <Image src={item.img} alt="campaign image" />
            </div>

            <div className=" relative p-2 ">
              <h4 className=" font-semibold text-center text-green-700 my-5 ">
                {item.header}
              </h4>
              <p className=" px-2 text-sm text-center line-clamp-4">
                {item.text}
              </p>

              <div className=" flex justify-center items-center w-full ">
                <Dialog>
                  <DialogTrigger asChild>
                    <p className=" mt-5 cursor-pointer hover:underline hover:text-green-700 hover:scale-110 transition-all duration-300 ease-in text-center">
                      আরো পড়ুন
                    </p>
                  </DialogTrigger>
                  <DialogContent className=" overflow-y-scroll h-[90vh]">
                    <div className=" flex justify-center items-center rounded-md">
                      <Image
                        src={item.img}
                        alt="assunnah_complex"
                        className=" h-auto w-full"
                      />
                    </div>

                    <DialogTitle className=" leading-6 text-green-700 ">
                      {item.header}
                    </DialogTitle>
                    <DialogDescription className=" leading-6 ">
                      {item.text}
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default CampaignCards;
