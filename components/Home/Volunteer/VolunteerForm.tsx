import { Button } from "@/components/ui/button";
import React from "react";

const VolunteerForm = () => {
	return (
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
					<Button variant={"custom"} type="submit">
						Submit
					</Button>
					{/* <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-gradient-to-tr from-[#59BFDF] to-[#E739F5]   rounded hover:bg-white group">
 						<span className="w-0 rounded  bg-black bg-opacity-20 absolute left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
						<span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
							hover effect 2
						</span>
					</button> */}
				</div>
			</form>
		</section>
	);
};

export default VolunteerForm;
