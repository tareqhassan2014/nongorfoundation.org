"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutData } from "@/api/about/About";
import Link from "next/link";
import Footstep from "../footStep/Footstep";
import { usePathname } from "next/navigation";
import { paths } from "@/utils/paths";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(AboutData[0].name);
  
  return (
    <div>
      <Footstep>
        <Link href={paths.home} className=" cursor-pointer hover:text-green-800 "> হোম </Link> / <span className=" text-green-800 ">আমাদের সম্পর্কে</span>
      </Footstep>
      <div className=" py-20 ">
        <h2 className="text-center py-3 text-2xl font-semibold">আমাদের সম্পর্কে</h2>
        <div >
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-12">
              <Tabs
                defaultValue={AboutData[0].name}
                className="flex lg:flex-col flex-row lg:col-span-3 col-span-12 overflow-auto"
              >
                {AboutData.map((data, index) => (
                  <div key={index}>
                    <TabsList>
                      <TabsTrigger
                        value={data.name}
                        onClick={() => setActiveTab(data.name)}
                      >
                        {data.name}
                      </TabsTrigger>
                    </TabsList>
                  </div>
                ))}
              </Tabs>
              
              <section className="lg:col-span-9 col-span-12 lg:border-l lg:px-5 overflow-auto">
                <div className="bg-white rounded-md p-3">
                  {AboutData.map(
                    (data, index) =>
                      data.name === activeTab && (
                        <div key={index}>
                          <h1 className=" text-2xl text-green-600 mb-5 ">
                            {data.name}
                          </h1>
                          <p id={data.name} className=" text-justify ">{data.description}</p>
                        </div>
                      )
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
