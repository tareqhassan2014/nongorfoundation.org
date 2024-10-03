'use client'

import React from "react";

const SignupForm = () => {
  const inputClassName =
    "w-full border bg-slate-100 dark:bg-[#0b3631] dark:placeholder:text-slate-400 px-5 py-2 rounded-sm focus:ring-1 ring-slate-300 outline-none";

  return (
    <form action="submit" className=" flex flex-col gap-5">
      <div className=" flex flex-col justify-center items-center gap-4">
        <input
          name="name"
          type="text"
          placeholder="ইউজার"
          className={inputClassName}
        />
        <input
          name="email"
          type="email"
          placeholder="ই-মেইল"
          className={inputClassName}
        />
        <input
          name="name"
          type="password"
          placeholder="পাসওয়ার্ড"
          className={inputClassName}
        />
        <input
          name="name"
          type="password"
          placeholder="পাসওয়ার্ড নিশ্চিত করুন"
          className={inputClassName}
        />
      </div>
      <button
        type="submit"
        className=" rounded-md font-bold text-center bg-green-600 hover:bg-green-700 p-2 w-full text-white transition-all duration-300 ease-in-out"
      >
        সাইন আপ
      </button>
    </form>
  );
};

export default SignupForm;
