import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image";
import React from 'react';

const CarouselBar = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Carousel>
                <CarouselContent>
                    <CarouselItem><Image src={"/home/education_help-bannar-.jpg"} height={1200} width={1200} alt="education_help" className="rounded-xl"></Image></CarouselItem>
                    <CarouselItem><Image src={"/home/education_help-bannar-.jpg"} height={1200} width={1200} alt="education_help" className="rounded-xl"></Image></CarouselItem>
                    <CarouselItem><Image src={"/home/education_help-bannar-.jpg"} height={1200} width={1200} alt="education_help" className="rounded-xl"></Image></CarouselItem>
                    <CarouselItem><Image src={"/home/education_help-bannar-.jpg"} height={1200} width={1200} alt="education_help" className="rounded-xl"></Image></CarouselItem>
                    <CarouselItem><Image src={"/home/education_help-bannar-.jpg"} height={1200} width={1200} alt="education_help" className="rounded-xl"></Image></CarouselItem>
                    <CarouselItem><Image src={"/home/education_help-bannar-.jpg"} height={1200} width={1200} alt="education_help" className="rounded-xl"></Image></CarouselItem>
                </CarouselContent>
            </Carousel>

        </div>
    );
};

export default CarouselBar;  