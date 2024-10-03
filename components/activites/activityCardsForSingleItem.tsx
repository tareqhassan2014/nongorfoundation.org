import React from "react";

import Image from "next/image";
import Link from "next/link";
import { activitesData } from "@/api/activities/Activities";
import { Button } from "@/components/ui/button";
import gift from "@/public/campaignImg/gift.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ActivityCardsForSingleItem = () => {
  return (
    <>
      {activitesData &&
        activitesData.map((data, index) => (
          <div
            key={index}
            className=" relative group bg-white rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
          >
            {/* <div className=" absolute -top-32 -left-32 bg-gradient-to-br from-orange-950 via-green-700 to-transparent w-0 group-hover:w-60 h-0 group-hover:h-60 rounded-full transition-all duration-500 ease-in-out "></div> */}
            <section className=" overflow-hidden flex justify-center items-center">
              <Image
                src={gift}
                alt="assunnah_complex"
                className=" h-full w-auto  "
              />
            </section>

            <section className="py-5 space-y-4">
              <h1 className=" text-xl text-center text-green-700">
                Dummy Cards
              </h1>
              <p className=" px-2 text-sm text-justify line-clamp-4">
                {data.text}
              </p>
              <div className=" flex justify-center items-center w-full ">
                <Dialog>
                  <DialogTrigger asChild>
                    <p className=" cursor-pointer hover:underline text-green-700 my-2 hover:scale-110 transition-all duration-300 ease-in text-center">
                      আরো পড়ুন
                    </p>
                  </DialogTrigger>
                  <DialogContent className=" overflow-y-scroll h-[90vh] ">
                    <div className=" flex justify-center items-center rounded-md">
                      <Image
                        src={gift}
                        alt="assunnah_complex"
                        className=" h-auto w-full"
                      />
                    </div>
                    <DialogHeader>
                      <DialogTitle className=" py-4 leading-6 text-green-700 ">
                        Dummy Cards
                      </DialogTitle>
                      <DialogDescription className=" leading-6 ">
                        {data.text}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </section>
          </div>
        ))}
    </>
  );
};

export default ActivityCardsForSingleItem;
