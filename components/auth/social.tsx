"use client";
import { Roboto } from "next/font/google";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
const font = Roboto({
    subsets: ["latin"],
    weight: ["500"],
});

export const Social = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className="mt-12 mb-4">Or Sign Up Using</h2>
            <div className="flex justify-center items-center w-full text-xl text-white">
                <div className="mr-2 p-2 bg-[#4267B2] rounded-full">
                    <FaFacebookF />
                </div>
                <div className="mr-2 p-2 bg-[#1DA1F2] rounded-full">
                    <FaTwitter />
                </div>
                <div className="p-2 bg-[#DB4437] rounded-full">
                    <FaGoogle />
                </div>
            </div>
        </div>
    );
};
