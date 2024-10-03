import React from "react";
import Link from "next/link";
import { paths } from "@/utils/paths";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { signIn } from "../auth";

const Signup = () => {
  return (
    <div className=" bg-orange-50 min-h-screen flex justify-center items-center p-2">
      <div className=" rounded-md bg-white px-5 py-16 my-16 flex flex-col gap-10 xl:w-[25vw] lg:w-[30vw] md:w-[40vw] sm:w-[50vw] w-full">
        <h1 className=" text-center text-2xl font-bold underline underline-offset-8">
        নিবন্ধন করুন
        </h1>
        <SignupForm />
        <div className=" flex justify-center items-center gap-1">
          <p>আপনি কি একজন সদস্য?</p>
          <Link href={paths.auth.signin} className=" text-orange-400 ">
          এখন লগইন করুন
          </Link>
        </div>
        {/* auto login icons */}
        <div>
          <p className=" w-full text-center ">অথবা</p>
          <div className=" flex flex-col justify-center items-center gap-1 mt-5">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button variant={"outline"} className=" w-full ">
                <FcGoogle size={20} />
                <span className=" ml-5 ">গুগল এর সাথে সাইন আপ করুন</span>
              </Button>
              {/* <Button variant={"outline"} className=" w-full ">
              <MdFacebook size={30} fill="blue" />
              <span className=" ml-5 ">ফেসবুক দিয়ে সাইন আপ করুন</span>
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
