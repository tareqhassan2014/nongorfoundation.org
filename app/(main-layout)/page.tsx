import BrowseCategory from "@/components/Home/BrowseByCategory/BrowseCategory";
import LatestCauses from "@/components/Home/LatestCauses/LatestCauses";
import MedicalCamp from "@/components/Home/MedicelCamp/MedicalCamp";
import NaturalDisaster from "@/components/Home/NaturalDisaster/NaturalDisaster";
import React from "react";
import VolunteerSection from "@/components/Home/Volunteer/Volunteer";
import AcademicEndeavors from "@/components/Home/AcademicEndeavors/AcademicEndeavors";
import EssentialsTriad from "@/components/Home/EssentialsTriad/EssentialsTriad";
import Training from "@/components/Home/Training/Training";
import Culture from "@/components/Home/Culture/Culture";
import Awareness from "@/components/Home/Awareness/Awareness";
import Faq from "@/components/Home/Faq/Faq";

const Home = () => {
	return (
		<div>
			{/* <VolunteerSection /> */}
			<LatestCauses />
			{/* <NaturalDisaster /> */}
			<MedicalCamp />
			<EssentialsTriad />
			<AcademicEndeavors />
			<Training />
			<Culture />
			<Awareness />
			<BrowseCategory />
			<Faq />
		</div>
	);
};

export default Home;
