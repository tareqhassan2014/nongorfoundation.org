import campaignImage1 from "@/public/campaignImg/donate.jpg";
import campaignImage2 from "@/public/campaignImg/volunteer.webp";
import campaignImage3 from "@/public/campaignImg/gift.jpg";

import { AiFillGift } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FcDonate } from "react-icons/fc";
import { ReactNode } from "react";

interface PropsType {
  id: number;
  image: any;
  header: string;
  text: string;
  logo: ReactNode;
  button: string;
}

export const cardDatas: PropsType[] = [
  {
    id: 1,
    image: campaignImage1,
    header: "Raise Funds",
    text: "In the land of plenty, millions of boys and girls are going to bed hungry.",
    logo: <FcDonate size={30} />,
    button: "Donate"
  },
  {
    id: 2,
    image: campaignImage2,
    header: "Become A Volunteer",
    text: "For people effected by poverty or disaster, health is essential.",
    logo: <IoIosPeople size={30} />,
    button: "Register"
  },
  {
    id: 3,
    image: campaignImage3,
    header: "Give a One-Time Gift",
    text: "Double your lifesaving impact with a gift today.",
    logo: <AiFillGift size={30}/>,
    button: "Gift"
  },
];
