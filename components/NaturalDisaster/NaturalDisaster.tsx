
import Image from "next/image";
import naturalDisaster from "@/public/Data/naturalDisaster.json";
import Link from "next/link";



const NaturalDisaster = () => {

    return (
        <div className="mt-36 max-w-6xl mx-auto font-serif px-1 lg:px-0">
            <h1 className="text-center text-5xl font-serif font-semibold mb-4">Natural Disaster</h1>
            <p className="uppercase text-center text-[#8a3bb1]">help those who need help</p>

            <div className="mt-14 flex gap-10 flex-col lg:flex-row ">
                <Image src="/home/natural-disaster.Banner.jpg" alt="Banner image" height={650} width={650} />
                <div className="space-y-5">
                    {naturalDisaster.map((data) => (
                        <div key={data?.id}>
                            <div className="  px-5 rounded-md shadow-md ">
                                <h1 className="text-xl font-semibold">{data?.name}</h1>
                                <p className="py-5">
                                    {data?.details?.length && data.details.length > 140 ? (
                                        <p>
                                            {data?.details.slice(0, 140)}...
                                            <Link href={"#"} className="pl-3 underline text-red-500 font-semibold text-sm">Read more</Link>
                                        </p>
                                    ) : (
                                        <p>{data?.details}</p>
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

export default NaturalDisaster;
