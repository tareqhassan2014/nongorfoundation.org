import { activitesData } from "@/api/activities/Activities";
import Activites from "@/components/activites/Activites";
import ActivityCard from "@/components/activites/activitycards/ActivityCard";
import ActivityCardsForSingleItem from "@/components/activites/activityCardsForSingleItem";
import Footstep from "@/components/footStep/Footstep";
import { paths } from "@/utils/paths";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface paramsType {
  params: { slug: string };
}

const DynamicActivities: React.FC<paramsType> = ({ params }) => {
  const { slug } = params;

  const singleCardData = activitesData.filter(
    (item) => item.header == decodeURIComponent(slug)
  );

  return (
    <>
      <Footstep>
        <Link
          href={paths.home}
          className=" cursor-pointer hover:text-green-800 "
        >
          Home
        </Link>
        /{" "}
        <Link
          href={paths.activity}
          className=" cursor-pointer hover:text-green-800 "
        >
          Activities
        </Link>
        / <span className=" text-green-800 ">{decodeURIComponent(slug)}</span>
      </Footstep>

      <div className=" container mx-auto py-10 ">
        <div className=" flex items-center justify-start gap-5 py-5">
          <Image src={singleCardData[0].img} alt="logo" className="w-10 h-10" />
          <h1 className=" uppercase text-green-800 font-bold text-3xl ">
            {singleCardData[0].header}
          </h1>
        </div>
        <hr className=" h-1 " />
        <p className=" py-4 ">{singleCardData[0].text}</p>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
          <ActivityCardsForSingleItem />
        </div>
      </div>
    </>
  );
};

export default DynamicActivities;
