"use client";
// light-gallery-------------
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image1 from "@/public/gallery/pimg1.jpg";
import image2 from "@/public/gallery/pimg2.jpg";
import image3 from "@/public/gallery/pimg3.jpg";
import image4 from "@/public/gallery/pimg4.jpg";
import image5 from "@/public/gallery/pimg5.jpg";
import image6 from "@/public/gallery/pimg6.jpg";
import image7 from "@/public/gallery/pimg7.jpg";
import image8 from "@/public/gallery/pimg8.jpg";
import image9 from "@/public/gallery/pimg9.jpg";
import image10 from "@/public/gallery/pimg10.jpg";
import image11 from "@/public/gallery/pimg11.jpg";
import image12 from "@/public/gallery/pimg12.jpg";
import Image from "next/image";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const ImageComp: React.FC = () => {
  return (
    <>
      <LightGallery
        elementClassNames=" grid grid-cols-3 gap-1"
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {galleryImages.map((img, index) => (
          <a key={index} href={img.src}>
            <Image alt={`img${index}`} src={img} className=" hover:scale-125 w-full h-full transition-all duration-300 ease-in" />
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default ImageComp;
