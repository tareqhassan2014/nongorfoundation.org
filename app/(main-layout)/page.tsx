import BrowseCategory from "@/components/Home/BrowseByCategory/BrowseCategory";
import LatestCauses from "@/components/Home/LatestCauses/LatestCauses";
import MedicalCamp from "@/components/Home/MedicelCamp/MedicalCamp";
import NaturalDisaster from "@/components/Home/NaturalDisaster/NaturalDisaster";
import EssentialsTriad from "@/components/Home/EssentialsTriad/EssentialsTriad";
import React from "react";
import VolunteerSection from "@/components/Home/Volunteer/Volunteer";

const Home = () => {
	return (
		<div>
			<VolunteerSection />
			<LatestCauses />
			<NaturalDisaster />
			<MedicalCamp />
			<EssentialsTriad />
			<BrowseCategory />
		</div>
	);
};

export default Home;
