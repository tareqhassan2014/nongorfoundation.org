import React from "react";
import ActivityCard from "./activitycards/ActivityCard";

const Activites = () => {
  return (
    <div id="activities">
      <div className=" container mx-auto bg-green-50 py-20">
        <h1 className=" text-3xl text-center mb-10 font-bold">Activites</h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <ActivityCard />
        </div>
      </div>
    </div>
  );
};

export default Activites;
