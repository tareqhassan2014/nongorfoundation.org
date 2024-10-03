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
    header: "তহবিল বাড়ান",
    text: " সমৃদ্ধ সমাজ বিনির্মাণে শক্তিশালী তহবিল গঠনে আপনার হাতকে প্রসারিত করুন.",
    logo: <FcDonate size={30} />,
    button: "দান করুন"
  },
  {
    id: 2,
    image: campaignImage2,
    header: "স্বেচ্ছাসেবক হয়ে উঠুন",
    text: "সমাজ গঠনে সংঘবদ্ধ মানুষের চিন্তা, চেতনা ও বুদ্ধির বিকাশকে কাজে লাগাতে স্বেচ্ছাসেবক হয়ে পাশে থাকুন.",
    logo: <IoIosPeople size={30} />,
    button: "নিবন্ধন করুন"
  },
  {
    id: 3,
    image: campaignImage3,
    header: "এককালীন উপহার দিন",
    text: "আজ উপহার দিয়ে আপনার জীবন রক্ষাকারী প্রভাবকে দ্বিগুণ করুন।",
    logo: <AiFillGift size={30}/>,
    button: "উপহার"
  },
];
