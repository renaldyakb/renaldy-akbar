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

export default function Photoshop(props: any) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2300; // Durasi animasi dalam milidetik

    const animateValue = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Pastikan progress tidak melebihi 1

      // Menggunakan fungsi "ease-in-out" untuk menghitung nilai bergerak
      const easedValue = easeInOut(progress, 0, 75);

      setValue(easedValue);

      if (progress < 1) {
        requestAnimationFrame(animateValue); // Teruskan animasi sampai selesai
      }
    };

    animateValue();
  }, []);

  // Fungsi untuk transisi "ease-in-out"
  function easeInOut(t: number, b: number, c: number) {
    t /= 0.5;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  return (
    <div className='block shrink-0'>
      <div className='flex text-lg items-center space-x-3 max-w-max p-2'>
        <SiAdobephotoshop className='text-[36px]' />
        <div className='mt-1'>
          <p className='text-white text-xs mt-1'>Adobe Photoshop</p>
          <progress
            className='progress h-2 w-32 -translate-y-1'
            value={value.toFixed(0)}
            max='100'
          ></progress>
        </div>
      </div>
    </div>
  );
}
