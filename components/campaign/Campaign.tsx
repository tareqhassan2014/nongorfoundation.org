import React from "react";
import CampaignCards from "./campaignCard/CampaignCards";
import Cards from "./giftcards/GiftCards";

const Campaign = () => {
  return (
    <div id="campagin">
      <div className=" py-16">
        <div className=" container mx-auto">
          <div className=" grid md:grid-cols-12 gap-y-5 ">
            <div className=" md:col-span-5">
              <h1 className=" font-semibold tracking-wider text-green-700 underline mb-5 uppercase ">
                Our Recent Causes
              </h1>
              <p className=" text-justify ">
                Lorem ipsum dolor sit amet consequuntur reprehenderit,
                laboriosam laborum quas quae dicta deserunt alias, magni quos
                dolores esse veniam. Numquam beatae minus reprehenderit
                explicabo!
              </p>
            </div>
            <div className=" md:col-span-2 md:block hidden "></div>
            <div className=" md:col-span-5 w-full h-60 rounded-lg overflow-hidden ">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/tzGkU5Pz9rA?si=u0caz9MFhKUcsY9o"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <Cards />
          </div>

          <h1 className=" mt-20 font-semibold tracking-wider text-green-700 uppercase">
            Our Campaigns
          </h1>
          <hr className=" bg-slate-300 mt-3 mb-10" />
          <div>
            <CampaignCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
