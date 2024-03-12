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
					<button
						className=" bg-gradient-to-r from-[#59BFDF] to-[#E739F5] text-white p-3 rounded-md text-lg "
						type="submit"
					>
						Send Message
					</button>
				</div>
			</form>
		</section>
	);
};

export default VolunteerForm;
