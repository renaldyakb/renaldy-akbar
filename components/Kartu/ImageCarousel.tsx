import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Definisikan tipe untuk prop 'images'
type ImageCarouselProps = {
  images: string[];
};

const CarouselSlick: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 2500, // Kecepatan scroll dalam milidetik
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Mengaktifkan auto-scroll
    autoplaySpeed: 1500, // Waktu dalam milidetik antara setiap scroll
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselSlick;
