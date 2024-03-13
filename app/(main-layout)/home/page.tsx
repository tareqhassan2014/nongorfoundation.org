import BrowseCategory from "@/components/Home/BrowseByCategory/BrowseCategory";
import LatestCauses from "@/components/Home/LatestCauses/LatestCauses";
import MedicalCamp from "@/components/Home/MedicelCamp/MedicalCamp";
import NaturalDisaster from "@/components/Home/NaturalDisaster/NaturalDisaster";
import React from "react";

const Home = () => {
	return (
		<div>
			<LatestCauses />
			<NaturalDisaster />
			<MedicalCamp />
			<BrowseCategory />
		</div>
	);
};

export default Home;
