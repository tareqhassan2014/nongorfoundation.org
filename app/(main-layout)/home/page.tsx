import BrowseCategory from '@/components/BrowseByCategorys/BrowseCategory';
import LatestCauses from '@/components/LatestCauses/LatestCauses';
import React from 'react';

const Home = () => {
    return (
        <div>
            <LatestCauses />
            <BrowseCategory />
        </div>
    );
};

export default Home;