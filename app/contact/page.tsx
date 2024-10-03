import Contact from "@/components/contact/Contact";
import Footstep from "@/components/footStep/Footstep";
import { paths } from "@/utils/paths";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Footstep>
        <Link href={paths.home} className=" cursor-pointer hover:text-green-800 ">হোম</Link> / <span className=" text-green-800 ">যোগাযোগ</span>
      </Footstep>
      <Contact />
    </>
  );
};

export default page;
