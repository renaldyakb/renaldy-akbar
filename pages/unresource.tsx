import React from "react";
import "animate.css";
import Link from "next/link";
import TypingEffect from "@/components/typeed/typing-hero";
import Head from "next/head";

import Image from "next/image";

export default function Waiting() {
  const tulisan = [
    "Sorry, There's nothing here.",
    "I wish I finishing this pages :(",
    "Please Go Back !!!",
  ];
  return (
    <>
      <Head>
        <title>Woops !!</title>
      </Head>
      <div className='flex flex-col box-border h-screen items-center justify-center'>
        <div className='mb-8 font-semibold'>
          <TypingEffect Hero={tulisan} />
        </div>
        <Image
          src='/akar.svg'
          width={100}
          height={100}
          className='animate__animated w-24 animate__bounce animate__flash animate__faster animate__infinite'
          alt={""}
        />
        <Link
          href='/'
          className='mt-12 border opacity-50 hover:border-cyan-400 hover:text-cyan-500 font-semibold text-xs px-5 py-3 rounded-full animate__animated animate__tada animate__delay-5s'
        >
          Back To Realitiy
        </Link>
      </div>
    </>
  );
}
