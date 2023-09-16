import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter(); // Menggunakan router dari Next.js

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-opacity-60'>
      <div className='container mx-auto flex flex-col md:flex-row md:justify-between items-center'>
        <div className='flex justify-between items-center w-full'>
          <Link href='/'>
            <Image
              src='/akar.svg'
              width={30}
              height={30}
              alt='logo'
              className='hover:opacity-60'
            />
          </Link>

          <div className='md:hidden'>
            <button
              onClick={toggleNavbar}
              className='text-white hover:text-gray-300 focus:outline-none text-2xl'
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "flex flex-col justify-center items-center" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-4 md:mt-0 h-screen md:h-auto text-lg md:text-base ml-7`}
        >
          <ul className='md:flex space-y-7 font-semibold text-xl md:text-base md:space-y-0 md:space-x-4 text-center'>
            <li>
              <Link href='/unresource'>
                <span
                  className={`${
                    router.pathname === "/" ? "text-yellow-400" : "text-white"
                  } hover:text-gray-300 cursor-pointer`}
                >
                  Portofolio
                </span>
              </Link>
            </li>
            <li>
              <Link href='/unresource'>
                <span
                  className={`${
                    router.pathname === "/about"
                      ? "text-yellow-400"
                      : "text-white"
                  } hover:text-gray-300 cursor-pointer`}
                >
                  Ratecard
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
