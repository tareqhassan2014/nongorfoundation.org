import About from "@/components/about/About";
import Campaign from "@/components/campaign/Campaign";
import CarouselPage from "@/components/carousel/CarouselPage";
import { ContextProvider } from "@/components/context/Context";
import News from "@/components/news/News";


export default function হোম() {
  return (
    <ContextProvider>
      <CarouselPage />
      <About />
      <Campaign />
      <News />
    </ContextProvider>
  );
}
