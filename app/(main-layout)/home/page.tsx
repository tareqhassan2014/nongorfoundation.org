import BrowseCategory from "@/components/Home/BrowseByCategory/BrowseCategory";
import LatestCauses from "@/components/Home/LatestCauses/LatestCauses";
import NaturalDisaster from "@/components/NaturalDisaster/NaturalDisaster";
import React from "react";

const Home = () => {
	return (
		<div>
			<NaturalDisaster />
			<LatestCauses />
			<BrowseCategory />
		</div>
	);
};

export default Home;
