import Footstep from "@/components/footStep/Footstep";
import Team from "@/components/team/team";
import { paths } from "@/utils/paths";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <Footstep>
        <Link
          href={paths.home}
          className=" cursor-pointer hover:text-green-800 "
        >
          হোম
        </Link>
        / <span className=" text-green-800 ">Team</span>
      </Footstep> */}

      <div>
        <Team />
      </div>
    </div>
  );
};

export default page;
