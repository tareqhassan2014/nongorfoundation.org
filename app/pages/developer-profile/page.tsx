import DevProfileCard from "@/components/pages/devProfileCard/DevProfileCard";
import React from "react";

const devProfile = () => {
  return (
    <main>
      {/* header */}
      <div className=" bg-gradient-to-r from-[#59BFDF] to-[#E739F5] p-10 text-white">
        <h1 className="uppercase text-center w-full lg:text-6xl text-4xl font-extrabold font-serif">
          Latent Talent <i className=" font-sans font-extralight text-xl">Team</i>
        </h1>
        <div className=" sm:flex flex-wrap justify-center items-center md:gap-10 gap-3 mt-5 hidden">
          <p>address: .......................... </p>
          <p>contact: .......................... </p>
          <p>Email: .......................@gmail.com</p>
        </div>
      </div>

<div>

</div>

      {/* card section */}
      <section className=" max-w-[1200px] mx-auto mt-10">
        <div className=" flex justify-center items-center">
          <h3 className=" uppercase bg-slate-200 rounded-lg p-2 w-40 text-center font-semibold "> Developers </h3>
        </div>
        {/* <hr className=" border-1 "/> */}
        <div className=" flex flex-wrap gap-10 justify-center items-center py-10">
          <DevProfileCard />
          <DevProfileCard />
          <DevProfileCard />
          <DevProfileCard />
          <DevProfileCard />
          <DevProfileCard />
          <DevProfileCard />
          <DevProfileCard />
        </div>
      </section>
    </main>
  );
};

export default devProfile;
