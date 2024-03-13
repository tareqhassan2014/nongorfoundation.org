import Image from "next/image";
import { freeMedicalCamp } from "@/public/Data/freeMedicalCamp";
import Link from "next/link";

const MedicalCamp = () => {
    return (
        <div className="mt-36 max-w-6xl mx-auto font-serif px-1 lg:px-0">
            <h1 className="text-[#424242] text-center text-5xl font-serif font-semibold mb-4">Free Medical Camp</h1>
            <p className="uppercase text-center text-[#8a3bb1]">help those who need help</p>
            <div className="mt-14 flex gap-10 flex-col lg:flex-row-reverse ">
                <Image src="/home/medical-help.Banner.jpg" alt="Banner image" height={650} width={650} className="object-cover rounded-lg" />
                <div className="space-y-5">
                    {freeMedicalCamp.map((data) => (
                        <div key={data?.id}>
                            <div className="  p-5 rounded-lg shadow-md border-t-4 border-blue-950">
                                <h1 className="text-xl font-semibold">{data?.name}</h1>
                                <p className="py-5">
                                    {data?.details?.length && data.details.length > 140 ? (
                                        <>
                                            {data?.details.slice(0, 140)}...
                                            <Link href="/pages/medical-help" className="pl-3 underline text-red-500 font-semibold text-sm">Read more</Link>
                                        </>
                                    ) : (
                                        <>{data?.details}</>
                                    )}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicalCamp;