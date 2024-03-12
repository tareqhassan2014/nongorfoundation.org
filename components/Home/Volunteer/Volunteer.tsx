import VolunteerDetails from "./VolunteerDetails";
import VolunteerForm from "./VolunteerForm";

const VolunteerSection = () => {
	return (
		<>
			{/* <div className="bg-gray-200 p-10">
				<h1 className="container mx-auto font-serif text-2xl text-center font-semibold text-gray-800">
					Become a Volunteer!
				</h1>
			</div> */}
			{/* page header */}
			<div className=" bg-gradient-to-r from-[#59BFDF] to-[#E739F5] px-10 lg:py-16 py-10 text-white my-5">
				<h1 className="uppercase text-center w-full lg:text-6xl text-4xl font-extrabold font-serif">
					Become A Volunteer
				</h1>
			</div>
			<div className="container mx-auto">
				<div className=" mb-10 ">
					<h1 className=" font-serif text-center w-full text-5xl font-semibold">Register Now</h1>
					<h4 className=" text-center w-full text-orange-400 mt-5">JOIN US NOW</h4>
				</div>

				<div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-10 p-5">
					<VolunteerDetails />
					<VolunteerForm />
				</div>
			</div>
		</>
	);
};

export default VolunteerSection;
