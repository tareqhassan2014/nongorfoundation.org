import Image from "next/image";
import img from "@/public/campaignImg/donate.jpg";

interface propsTypeforChildren {
  children: React.ReactNode;
}

const Footstep: React.FC<propsTypeforChildren> = ({ children }) => {
  return (
    <div className="relative max-h-[45vh] overflow-hidden">
      <Image src={img} alt="cover image " />
      <div className=" bg-black/20 absolute left-0 top-0 flex justify-start items-center md:pl-28 pl-10 text-lg w-full h-full text-white">
        {children}
      </div>
    </div>
  );
};

export default Footstep;
