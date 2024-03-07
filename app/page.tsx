import BrowseCategory from "@/components/BrowseByCategorys/BrowseCategory";
import LatestCauses from "@/components/LatestCauses/LatestCauses";


export default function Home() {
  return (
    <div>
      <LatestCauses />
      <BrowseCategory />
    </div>
  );
}
