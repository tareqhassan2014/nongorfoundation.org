import Image from "next/image";
import React from "react";
import image from "@/public/volunteer.webp";
import { BiSolidRightArrow } from "react-icons/bi";

<<<<<<< HEAD
const page = () => {
	return (
		<main>
			{/* page header */}
			<div className=" bg-gradient-to-r from-[#59BFDF] to-[#E739F5] px-10 lg:py-16 py-10 text-white">
				<h1 className="uppercase text-center w-full lg:text-6xl text-4xl font-extrabold font-serif">
					Become A Volunteer
				</h1>
			</div>
=======
const volunteer = () => {
  return (
    <main>
      {/* page header */}
      <div className=" bg-gradient-to-r from-[#59BFDF] to-[#E739F5] px-10 lg:py-16 py-10 text-white">
        <h1 className="uppercase text-center w-full lg:text-6xl text-4xl font-extrabold font-serif">
          Become A Volunteer
        </h1>
      </div>
>>>>>>> 56a9e2d6a8878c60d3983d67b0309b420f07fcf2

			{/* start form section */}
			<div className=" max-w-[1000px] mx-auto mt-10 py-10">
				{/* form header */}
				<div className=" mb-10 ">
					<h1 className=" font-serif text-center w-full text-5xl font-semibold">Register Now</h1>
					<h4 className=" text-center w-full text-orange-400 mt-5">JOIN US NOW</h4>
				</div>

				<div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-10 p-5">
					{/* form left side image & desc section */}
					<section>
						<Image className=" rounded-md " src={image} alt="form-image-SEO section" />
						<div className=" flex flex-col gap-5 mt-5">
							<h1 className=" uppercase text-3xl font-bold font-serif ">Requirements</h1>

							<p className=" text-slate-500 lg:w-[80%] w-full">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae animi dolorum corrupti,
								unde recusandae aspernatur! Distinctio ex at temporibus soluta cum, fuga delectus ipsa
								aspernatur, vero fugiat quo optio nisi.
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

							<div className=" flex justify-between items-center sm:gap-16 gap-8 border-t-2 border-b-2 py-5 mt-5 flex-col  lg:flex-row ">
								<div className=" flex flex-col items-center">
									<h3 className=" font-semibold text-lg">Call us</h3>
									<p className=" text-orange-400 mt-2">01700 000 000</p>
								</div>
								<div className=" flex flex-col items-center">
									<h3 className=" font-semibold text-lg">Send email</h3>
									<p className=" text-orange-400 mt-2">nongorfoundation@gmail.com</p>
								</div>
							</div>
						</div>
					</section>

					{/* form right side form section */}
					<section>
						<form className=" flex flex-col gap-5 justify-start">
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<input
									className=" bg-transparent text-lg w-full focus:outline-none "
									type="text"
									placeholder="Full Name"
									name="name"
								/>
							</div>
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<input
									className=" bg-transparent text-lg w-full focus:outline-none"
									type="text"
									placeholder="Email"
									name="email"
								/>
							</div>
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<input
									className=" bg-transparent text-lg w-full focus:outline-none"
									type="number"
									placeholder="Phone Number"
									name="number"
								/>
							</div>
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<input
									className=" bg-transparent text-lg w-full focus:outline-none"
									type="text"
									placeholder="Occupation"
									name="occupation"
								/>
							</div>
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<input
									className=" bg-transparent text-lg w-full focus:outline-none"
									type="text"
									placeholder="Date of Birth"
									name="date"
								/>
							</div>
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<input
									className=" bg-transparent text-lg w-full focus:outline-none"
									type="text"
									placeholder="Address"
									name="address"
								/>
							</div>
							<div className=" bg-orange-50 px-5 py-4 rounded-mg">
								<textarea
									className=" bg-transparent text-lg w-full focus:outline-none"
									rows={6}
									placeholder="Write a Message"
								/>
							</div>

							<div>
								<button
									className=" bg-gradient-to-r from-[#59BFDF] to-[#E739F5] text-white p-3 rounded-md text-lg "
									type="submit"
								>
									Send Message
								</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</main>
	);
};

export default volunteer;
