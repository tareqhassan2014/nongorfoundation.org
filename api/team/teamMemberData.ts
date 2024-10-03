import president from "@/public/Team Pic/Abdul Kader.jpg";
import vicePresident from "@/public/Team Pic/Nazmul Hossain.jpg";
import GeneralSecretary from "@/public/Team Pic/Shiful Islam.jpg";
import JointGeneralSecretary from "@/public/Team Pic/Mohiuddin.jpg";
import cashier from "@/public/Team Pic/Abdul Gofur.jpg";
import executiveMember from "@/public/Team Pic/Md. Selim Ullah.jpg";
import executiveMember1 from "@/public/Team Pic/Shamima Afrin Lima.jpg";
export interface MemberDataType {
  id: number;
  name: string;
  designation: string;
  img: any;
  contacts: {
    email?: string;
    fb: string;
    telegram?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembersData: MemberDataType[] = [
  {
    id: 1,
    name: "Md Abdul Kader",
    designation: "President",
    img: president,
    contacts: {
      email: "mdakader20@gmail.com",
      fb: "https://www.facebook.com/kader00013",
      telegram: "https://t.me/kader00013",
      twitter: "https://x.com/kader_r3",
      instagram: "https://www.instagram.com/kader00013",
    },
  },
  {
    id: 2,
    name: "Md Nazmul Hossain",
    designation: "Vice President",
    img: vicePresident,
    contacts: {
      email: "#",
      fb: "https://www.facebook.com/sadamataN",
      telegram: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Md Shiful Islam",
    designation: "General Secretary",
    img: GeneralSecretary,
    contacts: {
      email: "#",
      fb: "https://www.facebook.com/shiful.islam65",
      telegram: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Md Mohiuddin Hossain",
    designation: "Joint General Secretary",
    img: JointGeneralSecretary,
    contacts: {
      email: "#",
      fb: "https://www.facebook.com/mohiuddin.hossain.9277",
      telegram: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Md Abdul Gofur",
    designation: "Cashier",
    img: cashier,
    contacts: {
      email: "#",
      fb: "https://www.facebook.com/profile.php?id=100004169506568",
      telegram: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    name: "Md Selim Ullah",
    designation: "Executive Member",
    img: executiveMember,
    contacts: {
      email: "#",
      fb: "https://www.facebook.com/mdsalim.ullah.739",
      telegram: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 7,
    name: "Shamima Afrin Lima",
    designation: "Executive Member",
    img: executiveMember1,
    contacts: {
      email: "#",
      fb: "https://www.facebook.com/shamimaafrin.lima",
      telegram: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];
