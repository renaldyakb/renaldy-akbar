import { useEffect, useState } from "react";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiBlender,
  SiCinema4D,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";

export default function Figma(props: any) {
  const [value, setValue] = useState(0);

  const animateValue = () => {
    const startTime = Date.now();
    const duration = 2000; // Durasi animasi dalam milidetik

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Pastikan progress tidak melebihi 1

      // Menggunakan fungsi "ease-in-out" untuk menghitung nilai bergerak
      const easedValue = easeInOut(progress, 0, 78);

      setValue(easedValue);

      if (progress < 1) {
        requestAnimationFrame(animate); // Teruskan animasi sampai selesai
      }
    };

    animate();
  };

  // Fungsi untuk transisi "ease-in-out"
  function easeInOut(t: number, b: number, c: number) {
    t /= 0.5;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  return (
    <>
      <div className='block shrink-0'>
        <VisibilitySensor
          onChange={(isVisible: any) => isVisible && animateValue()}
        >
          <div className='flex text-lg items-center space-x-3 max-w-max'>
            <FaFigma className='text-[36px]' />
            <div className='mt-1'>
              <p className='text-white text-xs mt-1'>Figma</p>
              <progress
                className='progress h-2 w-32 -translate-y-1 text-black'
                value={value.toFixed(0)}
                max='100'
              ></progress>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    </>
  );
}
