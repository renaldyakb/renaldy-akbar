import * as React from "react";
import {
  PiAddressBookBold,
  PiIdentificationCardBold,
  PiReadCvLogoBold,
} from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";

const Instagram = () => {
  return (
    <>
      <div className='flex justify-center items-center mx-auto'>
        {" "}
        {/* Tambahkan class 'items-center' */}
        <span className='px-2 scale-110'>
          <GrInstagram />
        </span>
        <span className=''>Instagram</span>
      </div>
    </>
  );
};

export default Instagram;
