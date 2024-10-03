import React, { useEffect } from "react";
import ImageComp from "../Gallery/imageComp/ImageComp";
import { Input } from "../ui/input";
import Image from "next/image";
import qrCodeScanner from "@/public/QR code.jpg";
import Link from "next/link";

const Footer = async () => {
  const liClassNames =
    " hover:text-green-500 hover:translate-x-3 transition-all duration-300 ease-in-out";

  return (
    <div className=" bg-green-950 text-white py-5 ">
      <div className=" container mx-auto grid md:grid-cols-4 gap-10 ">
        {/* gallery */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">ছবির শোকেস</h4>
          <ImageComp />
        </div>

        {/* elements */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">উপাদান</h4>
          <ul className=" space-y-2 ">
            {[
              { buttonText: "আমাদের ইভেন্ট", link: "#" },
              { buttonText: "যেকোনো প্রশ্ন জিজ্ঞাসা করুন", link: "#" },
              { buttonText: "ফেরত নীতি", link: "#" },
              { buttonText: "পেমেন্ট অপশন", link: "#" },
              { buttonText: "গোপনীয়তা নীতি", link: "#" },
              { buttonText: "শর্তাবলী", link: "#" },
            ].map((item, index) => (
              <li key={index} className={liClassNames}>
                <Link href={item.link}>* {item.buttonText}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">দ্রুত লিংক</h4>

          <ul className=" space-y-2 ">
            {[
              { buttonText: "কার্যক্রম", link: "#" },
              { buttonText: "স্বেচ্ছাসেবক", link: "#" },
              { buttonText: "প্রচারণা", link: "#" },
              { buttonText: "যোগাযোগ", link: "#" },
              { buttonText: "নিবন্ধন করুন", link: "#" },
            ].map((item, index) => (
              <li key={index} className={liClassNames}>
                <Link href={item.link}>* {item.buttonText}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter */}
        <div >
          <h4 className="mb-5 text-2xl font-semibold">স্ক্যান করুন</h4>
          <Image src={qrCodeScanner} alt="..." className=" w-40 h-auto" />
        </div>
      </div>

      {/* copyright  */}
      <p className=" text-center mt-5 ">
        কপিরাইট © ২০২৪ |{" "}
        <a href="#" className=" text-green-500">
          নোঙর ফাউন্ডেশন
        </a>
      </p>
    </div>
  );
};

export default Footer
