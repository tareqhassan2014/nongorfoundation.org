'use client'

import { motion } from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { carouselDatas } from "@/api/carousel/CarouselData";
import Link from "next/link";
import { paths } from "@/utils/paths";
import { useState } from "react";
import { useCreatedContext } from "../context/Context";


const CarouselPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { context } = useCreatedContext()

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, EffectFade, Autoplay]}
        autoplay = {{delay: 10000, disableOnInteraction: false}}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {carouselDatas.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className=" relative flex items-center justify-center md:h-[87vh] h-[70vh] overflow-hidden "
              style={{
                backgroundImage: `url(${item.img.src})`,
                backgroundSize: "cover",
                objectFit: "fill",
                backgroundPosition: "center",
              }}
            >
              <div className=" md:p-24 p-10 bg-black/40 absolute left-0 top-0 flex justify-center items-center w-full h-full">
                <motion.div
                  variants={context.parentAnimation}
                  initial="hidden"
                  animate={currentSlide === index ? "show" : "hidden"}
                  className=" md:mt-60 text-white flex flex-col gap-7 justify-center items-center w-full md:max-w-[65vw]"
                >
                  <motion.h1
                    variants={context.childrenAnimation}
                    className="  md:text-5xl text-3xl font-bold text-center "
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    variants={context.childrenAnimation}
                    className=" text-2xl md:font-semibold text-center md:w-[70%] "
                  >
                    {item.desc}
                  </motion.p>
                  <motion.p
                    variants={context.childrenAnimation}
                    className="cursor-pointer py-2 px-5 text-white rounded-md bg-green-800 hover:bg-green-700 "
                  >
                    <Link href={paths.donate} >Donate Now</Link>
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselPage;
