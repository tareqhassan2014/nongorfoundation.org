import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { activitesData } from "@/api/activities/Activities";
import ActivityCard from "../activites/activitycards/ActivityCard";
import FaqCards from "./Cards";
import { FAQData } from "@/api/question/answer";
import Link from "next/link";

const Faq = () => {
  return (
    <div>
      <div className=" container mx-auto py-20 ">
        <h1 className=" font-semibold uppercase text-green-700 ">FAQ</h1>
        <hr className=" bg-white mb-10 " />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {activitesData &&
            activitesData.map((data, index) => (
              <FaqCards
                key={index}
                image={data.img}
                header={data.header}
                text={data.text}
              />
            ))}
        </div>

        <div className=" mt-20 ">
          <Accordion type="single" collapsible className="w-full ">
            {FAQData.map((item, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className=" uppercase bg-green-100 focus:outline outline-green-200 ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className=" p-4 bg-white space-y-3 ">
                  {item.answer.map((item, index) => (
                    <p key={index} className=" text-justify p-3 ">
                      {item}
                    </p>
                  ))}
                  {item.location && (
                    <Link href={item.location} className=" p-3  ">
                      Location:
                      <span className="text-green-500 hover:text-green-300 ml-5">
                        {item.location}
                      </span>
                    </Link>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
