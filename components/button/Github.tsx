import * as React from "react";
import {
  PiAddressBookBold,
  PiIdentificationCardBold,
  PiReadCvLogoBold,
} from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";
import { BiLogoGithub } from "react-icons/bi";

const Github = () => {
  return (
    <>
      <div className='flex justify-center items-center mx-auto'>
        {" "}
        {/* Tambahkan class 'items-center' */}
        <span className='px-2 scale-110'>
          <BiLogoGithub />
        </span>
        <span className=''>Github</span>
      </div>
    </>
  );
};

export default Github;
