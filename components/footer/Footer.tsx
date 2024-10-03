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
          <h4 className=" mb-5 text-2xl font-semibold">Photo Showcase</h4>
          <ImageComp />
        </div>

        {/* elements */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">Elements</h4>
          <ul className=" space-y-2 ">
            {[
              { buttonText: "Out Events", link: "#" },
              { buttonText: "Ask any Question", link: "#" },
              { buttonText: "Refund Policy", link: "#" },
              { buttonText: "Payment Options", link: "#" },
              { buttonText: "Privacy Policy", link: "#" },
              { buttonText: "Terms & Conditions", link: "#" },
            ].map((item, index) => (
              <li key={index} className={liClassNames}>
                <Link href={item.link}>* {item.buttonText}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">Quick Links</h4>

          <ul className=" space-y-2 ">
            {[
              { buttonText: "Activities", link: "#" },
              { buttonText: "Volunteer", link: "#" },
              { buttonText: "Campaigns", link: "#" },
              { buttonText: "Contact", link: "#" },
              { buttonText: "Register", link: "#" },
            ].map((item, index) => (
              <li key={index} className={liClassNames}>
                <Link href={item.link}>* {item.buttonText}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter */}
        <div >
          <h4 className="mb-5 text-2xl font-semibold">Scan Here</h4>
          <Image src={qrCodeScanner} alt="..." className=" w-48 h-auto" />
        </div>
      </div>

      {/* copyright  */}
      <p className=" text-center mt-5 ">
        Copyright © 2024 |{" "}
        <a href="#" className=" text-green-500">
          Nongor Foundation
        </a>
      </p>
    </div>
  );
};

export default Footer;
