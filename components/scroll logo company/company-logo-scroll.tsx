import React from "react";
import Image from "next/image";

const gambar = [
  "/company/company-01.png",
  "/company/company-02.png",
  "/company/company-03.png",
  "/company/company-04.png",
  "/company/company-05.png",
  "/company/company-06.png",
  "/company/company-07.png",
  "/company/company-08.png",
  "/company/company-09.png",
  // Tambahkan gambar-gambar lainnya di sini
];

function Company() {
  return (
    <div className=' overflow-hidden opacity-50 mx-auto shrink-0'>
      <div className='flex h-16 space-x-11 jalankan grayscale'>
        {gambar.map((gambar: any, index: number) => (
          <Image
            src={gambar}
            key={index}
            alt={`Logo ${index + 1}`}
            width={300}
            height={300}
            className='o object-contain  '
          />
        ))}
        {gambar.map((gambar: any, index: number) => (
          <Image
            src={gambar}
            key={index}
            alt={`Logo ${index + 1}`}
            width={300}
            height={300}
            className='o object-contain  '
          />
        ))}
        {gambar.map((gambar: any, index: number) => (
          <Image
            src={gambar}
            key={index}
            alt={`Logo ${index + 1}`}
            width={300}
            height={300}
            className='o object-contain  '
          />
        ))}
      </div>
      <div className='bg-black w-full absolute top-0 h-16 opacity-0'></div>
    </div>
  );
}

export default Company;
