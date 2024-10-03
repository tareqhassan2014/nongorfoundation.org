import Activites from "@/components/activites/Activites";
import Footstep from "@/components/footStep/Footstep";
import { paths } from "@/utils/paths";
import Link from "next/link";

const page = () => {

  return (
    <div>
      <Footstep>
        <Link
          href={paths.home}
          className=" cursor-pointer hover:text-green-800 "
        >
          Home

        </Link>{" "}
        / <span className=" text-green-800 ">Activities</span>
      </Footstep>
      <Activites />
    </div>
  );
};

export default page;
