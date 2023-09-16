import * as React from "react";
import {
  PiAddressBookBold,
  PiIdentificationCardBold,
  PiReadCvLogoBold,
} from "react-icons/pi";

const Hire = () => {
  return (
    <>
      <div className='flex justify-center items-center mx-auto'>
        {" "}
        {/* Tambahkan class 'items-center' */}
        <span className='px-1 scale-110'>
          <PiReadCvLogoBold />
        </span>
        <span className=''>HIRE ME</span>
      </div>
    </>
  );
};

export default Hire;
