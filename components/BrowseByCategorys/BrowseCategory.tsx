import Link from "next/link";
import "./BrowseCategory.css"
import { FaHandsPraying } from "react-icons/fa6";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { MdFamilyRestroom } from "react-icons/md";
import { BsMortarboard } from "react-icons/bs";
import { GiLoveHowl } from "react-icons/gi";

const BrowseCategory = () => {
    return (
        <div className="text-[#424242] my-36">
            <h1 className="text-center text-5xl font-serif font-semibold mb-4">Browse by Categories</h1>
            <p className="uppercase text-center text-[#8a3bb1]">browse cause now</p>
            <div className="flex flex-col lg:flex-row justify-center gap-14 mt-14">
                <div className="flex items-center flex-col">
                    <div className=" polygon_style2 py-8 px-16 bg-[#50bac3] text-white">
                        <FaHandsPraying className="text-7xl" />
                    </div>
                    <p className="category-type text-2xl font-serif font-semibold browse-style mt-4"><Link href={"#"}>Religion</Link></p>
                </div>
                <div className="flex items-center flex-col">
                    <div className=" polygon_style2 py-8 px-16 bg-[#e36955] text-white">
                        <LiaStethoscopeSolid className="text-7xl" />
                    </div>
                    <p className="category-type text-2xl font-serif font-semibold browse-style mt-4"><Link href={"#"}>Medical</Link></p>
                </div>
                <div className="flex items-center flex-col">
                    <div className=" polygon_style2 py-8 px-16 bg-[#f1ae44] text-white">
                        <MdFamilyRestroom className="text-7xl" />
                    </div>
                    <p className="category-type text-2xl font-serif font-semibold browse-style mt-4"><Link href={"#"}>Family</Link></p>
                </div>
                <div className="flex items-center flex-col">
                    <div className=" polygon_style2 py-8 px-16 bg-[#863bae] text-white">
                        <BsMortarboard className="text-7xl" />
                    </div>
                    <p className="category-type text-2xl font-serif font-semibold browse-style mt-4"><Link href={"#"}>Education</Link></p>
                </div>
                <div className="flex items-center flex-col">
                    <div className=" polygon_style2 py-8 px-16 bg-[#424242] text-white">
                        <GiLoveHowl className="text-7xl" />
                    </div>
                    <p className="category-type text-2xl font-serif font-semibold browse-style mt-4"><Link href={"#"}>Animal</Link></p>
                </div>

            </div>
        </div>
    );
};

export default BrowseCategory;