import React from "react";

export default function Loading() {
  return (
    <div className='flex flex-col relative shrink-0 box-border h-screen justify-center '>
      <span className='loading loading-infinity loading-lg flex flex-col relative shrink-0 box-border mx-auto text-warning scale-150'></span>
    </div>
  );
}

// import React from "react";
// import "animate.css";

// import Image from "next/image";

// export default function Waiting() {
//   return (
//     <>
//       <div className='justify-center h-screen flex w-screen align-middle '>
//         <Image
//           src='/akar.svg'
//           width={200}
//           height={200}
//           className='w w-24 animate__animated animate__bounce animate__flash animate__faster animate__infinite'
//         />
//       </div>
//     </>
//   );
// }
