import Image from "next/image";
import { essentialsTried } from "@/public/Data/essentialsTried";
import Link from "next/link";

const EssentialsTriad = () => {
  return (
    <div className="mt-36 max-w-6xl mx-auto font-serif px-1 lg:px-0">
      <h1 className="text-[#424242] text-center text-5xl font-serif font-semibold mb-4">
        Essentials Triad : Food, Shelter, Clothing
      </h1>
      <p className="uppercase text-center text-[#8a3bb1]">
        help those who need help
      </p>
      <div className="mt-14 flex gap-10 flex-col lg:flex-row ">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src="/home/Essentials-Triad-food-1.webp"
              alt="Banner image"
              height={625}
              width={650}
              className="object-cover rounded-tl-md"
            />
            <Image
              src="/home/Essentials-Triad-shelter-1.jpeg"
              alt="Banner image"
              height={625}
              width={650}
              className="object-cover rounded-bl-md"
            />
          </div>
          <Image
            src="/home/Essentials-Triad-cloth-1.jpeg"
            alt="Banner image"
            height={640}
            width={650}
            className="object-cover rounded-r-3xl"
          />
        </div>
        <div className="space-y-5">
          {essentialsTried.map((data) => (
            <div key={data?.id}>
              <div className="  p-5 rounded-lg shadow-md border-t-4 border-blue-950">
                <h1 className="text-xl font-semibold">{data?.name}</h1>
                <p className="py-5">
                  {data?.details?.length && data.details.length > 140 ? (
                    <>
                      {data?.details.slice(0, 140)}...
                      <Link
                        href="/pages/natural-disaster"
                        className="pl-3 underline text-red-500 font-semibold text-sm"
                      >
                        Read more
                      </Link>
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

export default EssentialsTriad;
