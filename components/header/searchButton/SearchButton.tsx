"use client";

import React from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchButton = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <div
        className={` ${
          expanded ? "w-full" : "hidden w-0"
        } absolute left-0 h-full z-50 transition-width duration-300 ease-in-out`}
      >
        <form className=" flex items-center h-full w-full">
          <input
            name="desc"
            type="text"
            placeholder="Search Products..."
            className=" text-lg h-full w-full border bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 px-5 py-2 focus:ring-1 outline-none"
          />
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={(e) => {
              e.preventDefault();
              setExpanded((prev) => !prev);
            }}
            type="submit"
            className=" h-full border-t-0 border-b-0 rounded-none "
          >
            <SearchIcon className=" w-full h-5 " />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={(e) => {
              e.preventDefault();
              setExpanded((prev) => !prev);
            }}
            className=" h-full border-t-0 border-b-0 rounded-none "
          >
            <XIcon className=" w-full h-5 " />
          </Button>
        </form>
      </div>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={(e) => {
          e.preventDefault();
          setExpanded((prev) => !prev);
        }}
        className=" bg-green-200 "
      >
        <SearchIcon className=" w-5 h-5" />
      </Button>
    </>
  );
};

export default SearchButton;
