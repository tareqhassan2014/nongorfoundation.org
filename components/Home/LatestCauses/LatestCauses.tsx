"use client"
import Image from "next/image";
import latestCauses from "@/public/Data/latestCauses.json"
import './latestCauses.css'
import Link from "next/link";
import { GoGoal } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";

const LatestCauses = () => {

    return (
        <div className="flex items-center justify-center mt-28">
            <div className="text-[#424242]">
                <h2 className="text-center text-5xl font-serif font-semibold mb-4">Latest Causes</h2>
                <p className="uppercase text-center text-[#8a3bb1]">help use now</p>
                <div className="flex gap-8 flex-col lg:flex-row mt-14">
                    {latestCauses.map(data => <div key={data.id} className="w-[370px]" >
                        <div className="mb-3">
                            <Image src={data.image} alt="help them to raise" height={420} width={370} style={{ height: "auto" }} />
                        </div>
                        <div className="bg-[#f2f0ec] py-10 px-10">
                            <button className="text-2xl font-serif font-extrabold btn-title pb-8"><Link href={"#"}>{data.title}</Link></button>
                            <p className="text-[#908381] pb-6">{data.short_description}</p>
                            <p className="flex gap-4 items-center">
                                <GoGoal className="text-2xl" />
                                <span className="font-semibold">Goal:</span>
                                <span className="text-red-500 font-semibold">{data.goal}</span>
                            </p>
                            <p className="flex gap-4 items-center">
                                <FaArrowTrendUp className="text-2xl" />
                                <span className="font-semibold">Raised:</span>
                                <span className="text-red-500 font-semibold">{data.raised}</span>
                            </p>
                            <button className="polygon_style donate-btn mt-8">
                                <Link href={"#"}>donate now</Link>
                            </button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default LatestCauses;