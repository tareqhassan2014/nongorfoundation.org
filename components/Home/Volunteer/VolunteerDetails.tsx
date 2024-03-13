import Image from "next/image";
import React from "react";
import image from "@/public/volunteer.webp";
import { BiSolidRightArrow } from "react-icons/bi";

const VolunteerDetails = () => {
	return (
		<section>
			<Image className=" rounded-md " src={image} alt="form-image-SEO section" layout="responsive" />
			<div className=" flex flex-col gap-5 mt-5">
				<h1 className=" uppercase text-3xl font-bold font-serif ">Requirements</h1>

				<p className=" text-slate-500 lg:w-[80%] w-full">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae animi dolorum corrupti, unde
					recusandae aspernatur! Distinctio ex at temporibus soluta cum, fuga delectus ipsa aspernatur, vero
					fugiat quo optio nisi.
				</p>

				<ul className=" flex flex-col gap-2 text-slate-500">
					<li className=" flex gap-2 justify-start items-center">
						<BiSolidRightArrow />
						<span>os ei nisl graecis vix aperiri consequat</span>
					</li>
					<li className=" flex gap-2 justify-start items-center">
						<BiSolidRightArrow />
						<span>os ei nisl graecis vix aperiri </span>
					</li>
					<li className=" flex gap-2 justify-start items-center">
						<BiSolidRightArrow />
						<span>os ei nisl graecis vix </span>
					</li>
				</ul>

				<div className=" flex justify-center items-center sm:gap-16 gap-8 border-t-2 border-b-2 py-5 mt-5">
					<div className=" flex flex-col justify-center items-center">
						<h3 className=" font-semibold text-lg">Call us</h3>
						<p className=" text-orange-400 mt-2">01700 000 000</p>
					</div>
					<div className=" flex flex-col justify-center items-center">
						<h3 className=" font-semibold text-lg">Send email</h3>
						<p className=" text-orange-400 mt-2">nongorfoundation@gmail.com</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VolunteerDetails;
