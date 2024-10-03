import React from "react";
import NewsCardsCom from "./newsCards/NewsCardsCom";

const News = () => {
  return (
    <div className=" py-16 bg-green-50 ">
      <div className=" container mx-auto">
        <div className=" ">
          <h1 className=" font-semibold uppercase text-green-700 ">
            সংবাদ
          </h1>
          <hr className=" bg-white " />
        </div>
        <p className=" my-10 text-justify ">
          ফাউন্ডেশনের লক্ষ্য ও উদ্দেশ্যে বাস্তবায়নে কর্মধারা অনুযায়ী বিভিন্ন সময়ে বাস্তবায়িত প্রোগ্রামের সংবাদ সমূহ
        </p>
        <div>
          <NewsCardsCom />
        </div>
      </div>
    </div>
  );
};

export default News;
