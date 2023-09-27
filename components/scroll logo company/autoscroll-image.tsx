import { useState, useEffect } from "react";
import Image from "next/image";

const ImageGallery = ({ images }: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const imageWidth = screenWidth + 100; // Lebar gambar lebih besar dari lebar layar

    const scrollHandler = () => {
      setScrollPosition((prevScrollPosition) => {
        if (prevScrollPosition >= imageWidth) {
          return -screenWidth; // Mengatur ulang ke ujung kiri saat mencapai ujung kanan
        }
        return prevScrollPosition + 1;
      });
    };

    const interval = setInterval(scrollHandler, 8); // Ubah kecepatan scroll sesuai keinginan Anda

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='image-gallery-container overflow-hidden grayscale'>
      <div
        className='image-gallery flex space-x-10'
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {images.map((image: any, index: number) => (
          <Image
            src={image}
            alt={`Image ${index}`}
            width={32}
            height={12}
            objectFit="contain"
            className='object-contain'
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
