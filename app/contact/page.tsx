import Contact from "@/components/contact/Contact";
import Footstep from "@/components/footStep/Footstep";
import { paths } from "@/utils/paths";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Footstep>
        <Link href={paths.home} className=" cursor-pointer hover:text-green-800 ">Home</Link> / <span className=" text-green-800 ">Contact</span>
      </Footstep>
      <Contact />
    </>
  );
};

export default page;
