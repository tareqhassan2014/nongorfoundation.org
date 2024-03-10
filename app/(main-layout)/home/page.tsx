import BrowseCategory from "@/components/Home/BrowseByCategory/BrowseCategory";
import LatestCauses from "@/components/Home/LatestCauses/LatestCauses";
import React from "react";

const Home = () => {
	return (
		<div>
			<LatestCauses />
			<BrowseCategory />
		</div>
	);
};

export default Home;
