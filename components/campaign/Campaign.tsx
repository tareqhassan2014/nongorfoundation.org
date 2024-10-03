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
              <h1 className=" font-semibold tracking-wider text-green-700 mb-5 uppercase ">
                আমাদের চলমান কার্যক্রম
              </h1>
              <p className=" text-justify ">
              ঈদের আনন্দ সবার মাঝে ছড়িয়ে দিতে ঈদ সামগ্রী বিতরণ করেছে নোঙর ফাউন্ডেশন। সাতক্ষীরা জেলার দেবহাটা উপজেলার নওয়াপাড়া ইউনিয়নে ঈদ সামগ্রী বিতরণ করে নোঙর ফাউন্ডেশন।
ফাউন্ডেশনের মাধ্যমে একশত পরিবারের মধ্যে চাল, ডাল, সেমাই, চিনি, নুডুলস ও তেলসহ নিত্যপ্রয়োজনীয় খাদ্য উপকরণ বিতরণ করা হয়। এই ঈদ উপহার পেয়ে স্বস্তির নিঃশ্বাস ফেলেন অসহায় ও দুস্থদের পরিবারের সদস্যরা।

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
          আমাদের প্রচারাভিযান
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
