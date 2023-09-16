import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "300", "100"],
  subsets: ["latin"],
});

const TruncateText = ({ kata, limit }: { kata: any; limit: number }) => {
  const words = kata.split(" ");
  const truncatedText = words.slice(0, limit).join(" ");

  return (
    <p className={`text-[12px] text-white hyphens-auto opacity-60`}>
      {truncatedText}
      <span className='text-yellow-600 italic font-bold'>
        {words.length > limit ? " - see more.." : ""}
      </span>
    </p>
  );
};

export default TruncateText;
