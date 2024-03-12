import BrowseCategory from "@/components/Home/BrowseByCategory/BrowseCategory";
import LatestCauses from "@/components/Home/LatestCauses/LatestCauses";
import VolunteerSection from "@/components/Home/Volunteer/Volunteer";
import React from "react";

const Home = () => {
	return (
		<div>
			<VolunteerSection />
			<LatestCauses />
			<BrowseCategory />
		</div>
	);
};

export default Home;
