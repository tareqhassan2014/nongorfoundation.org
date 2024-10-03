import Image from "next/image";
import React from "react";
import memberImage from "@/public/member-img.jpg";

const OtherMembers = () => {
  const size = 14;
  const items =
    "border-2 border-slate-300 rounded-full p-1 transition-all duration-300 ease-in-out text-slate-600 hover:scale-110 hover:text-green-400 ";

  return (
    <div className=" py-10 ">
      <h1 className=" text-center font-semibold ">Our Honorable Members</h1>
      <hr className=" h-1 my-5 " />
      <div className=" grid grid-cols-4 gap-3 container mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className=" w-full lg:max-w-72 border rounded-md p-4 hover:shadow-md hover:shadow-green-500 transition-all duration-300 ease-in"
          >
            <div className=" overflow-hidden relative flex flex-col items-center justify-center gap-3">
              <div className=" shadow-md shadow-green-500 h-20 w-20 rounded-full overflow-hidden">
                <Image src={memberImage} alt="member img" />
              </div>
              <div className=" py-2 w-full flex flex-col justify-center items-center gap-2 ">
                <h1 className=" font-semibold text-lg uppercase ">
                  Tareq Hassan
                </h1>
                <p className=" text-green-700 text-sm  ">Member</p>

                <p>cell: 015+++++++++</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherMembers;
