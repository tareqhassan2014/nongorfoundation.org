import Image from "next/image";
import { academicEndeavors } from "@/public/Data/academicEndeavors";
import Link from "next/link";

const AcademicEndeavors = () => {
    const filterCourseOfAction = academicEndeavors.filter(data => data.courseOfAction)
    return (
        <div className="mt-36 max-w-6xl mx-auto font-serif px-1 lg:px-0">
            <h1 className="text-[#424242] text-center text-5xl font-serif font-semibold mb-4">Academic Endeavors</h1>
            <p className="uppercase text-center text-[#8a3bb1]">help those who need help</p>
            <div className="mt-14 flex gap-10 flex-col lg:flex-row-reverse ">
                <Image src="/home/education_help-bannar-.jpg" alt="Banner image" height={650} width={650} className="rounded-lg" />
                <div>
                    {
                        filterCourseOfAction.map(data => <div key={data.id} className="flex flex-col justify-between  p-5 rounded-lg h-full shadow-md border-t-4 border-blue-950">
                            <div className="flex gap-4">
                                <p className="bg-blue-900 px-1 rounded-t-lg rounded-b-lg"></p>
                                <p>{data.courseOfAction}</p>
                            </div>
                            <Link href={"/pages/academic-endeavors"} className="pl-3 underline text-red-500 font-semibold text-sm flex justify-end">Learn more</Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AcademicEndeavors;