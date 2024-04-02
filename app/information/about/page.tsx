"use client"
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutData } from "@/public/Data/about"

const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(AboutData[0].name);

    return (
        <div>
            <div className="text-white bg-green-700">
                <h2 className="text-center py-3 text-2xl font-semibold">About Us</h2>
            </div>
            <div className="bg-slate-100">
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
                        <section className="lg:col-span-9 col-span-12 lg:border-l bg-slate-100 lg:px-5 py-5 overflow-auto">
                            <div className="bg-white rounded-sm p-3">
                                {AboutData.map(
                                    (data, index) =>
                                        data.name === activeTab && (
                                            <div key={index}>
                                                <p>{data.description}</p>
                                            </div>
                                        )
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;