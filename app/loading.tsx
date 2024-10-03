import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import React from "react";

const loading = () => {
  return (
    <div className=" z-50 absolute h-screen w-screen bg-black/30 top-0 left-0 flex justify-center items-center ">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
