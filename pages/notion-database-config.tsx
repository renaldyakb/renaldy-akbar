import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Head from "next/head";
import "animate.css";

import "animate.css";

export default function Home() {
  const [notionData, setNotionData] = useState<Array<any>>([]);

  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    fetchDataFromNotion(); // Panggil fungsi untuk mengambil data Notion
  }, []);

  async function fetchDataFromNotion() {
    const databaseId = "df3c03a1efdc4f4ba0939f4c3ae6d54f"; // Ganti dengan ID basis data Notion Anda
    try {
      const response = await fetch(`/api/notion-data?databaseId=${databaseId}`);
      const data = await response.json();
      setNotionData(data); // Set data ke state
      console.log(data);
    } catch (error) {
      console.error("Error fetching data from Notion:", error);
    }
  }

  //make onclick copy function when click the code
  // Menggunakan MouseEvent dan HTMLElement
  function copyToClipboard(e: React.MouseEvent<HTMLElement>) {
    // Menggunakan currentTarget untuk mengakses elemen yang diklik
    const target = e.currentTarget;
    const innerText = target.innerText;

    var textField = document.createElement("textarea");
    textField.innerText = innerText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    // Set state untuk menampilkan elemen alert
    setCopySuccess(true);

    // Atur waktu timeout untuk menghilangkan elemen alert
    setTimeout(() => {
      setCopySuccess(false);
    }, 1200); // Sesuaikan dengan durasi tampilan alert
  }

  // Di dalam loop pemetaan untuk setiap targetRow
  notionData.map((targetRow) => {
    // ...

    // Definisikan imageUrls di dalam loop
    const imageUrls =
      targetRow.properties.Gambar?.files.map(
        (file: { file: { url: any } }) => file?.file?.url
      ) || [];

    // Log URL gambar untuk setiap targetRow
    imageUrls.forEach((url: any, index: number) => {
      console.log(
        `URL Gambar ke-${index + 1} (${
          targetRow.properties.Judul?.title?.[0]?.text?.content
        }): ${url}`
      );
    });

    // ...
  });

  return (
    <>
      <Head>
        <title>Notion Database Config</title>
        <meta name='description' content='Notion Database Config' />
        <link rel='icon' href='/r-logo.ico' />
      </Head>
      <div className='relative shrink-0 box-border flex flex-row flex-wrap justify-center'>
        {notionData.length > 0 ? (
          notionData.map((targetRow) => (
            <div
              key={targetRow.id}
              className='group bg-slate-800 hover:bg-slate-700 mt-5 w-max rounded-md ml-6 animate__animated animate__fadeInLeft'
            >
              <h2 className='font-bold text-center bg-slate-700 group-hover:bg-slate-600 max-w-full rounded-t-lg p-2 text-white group-hover:text-amber-500 text-lg mb-2'>
                {targetRow.properties.Judul?.title?.[0]?.text?.content ||
                  "Title not available"}
              </h2>

              <div className='text-xs p-4 text-center'>
                <b className='text-amber-300'>ID :</b>{" "}
                {/* CODE ID BERADA DISINI */}
                <code
                  id={targetRow.id}
                  onClick={copyToClipboard}
                  className='select-all shrink-0 bg-slate-900 hover:bg-green-700 text-slate-500 p-2 hover:cursor-pointer hover:text-cyan-200 rounded-lg'
                >
                  {targetRow.id}
                </code>
                {/* GAMBAR */}
                {targetRow.properties.Gambar?.files.length > 0 ? (
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow border border-base-300 mx-auto bg-slate-900 mt-4'
                  >
                    <div className='collapse-title text-xl font-medium'>
                      Lihat Gambar
                    </div>

                    <div className='collapse-content'>
                      <ul>
                        {targetRow.properties.Gambar.files.map(
                          (image: { file: { url: any } }, index: number) => (
                            <li key={index} className=''>
                              <div className='relative inline-block overflow-hidden mx-auto h-64'>
                                <img
                                  src={image.file.url || "/default-image.jpg"}
                                  alt={`Gambar ${index + 1}`}
                                  width={240}
                                  height={240}
                                  className='cursor-pointer transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out'
                                />
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className='mt-4'>Tidak ada gambar tersedia</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>

      {/* Tampilkan pesan alert secara dinamis */}
      {copySuccess && (
        <div className='fixed top-10 inset-x-0 flex justify-center animate__animated animate__bounceIn animate__faster'>
          <div className='bg-green-700 p-4 rounded-lg shadow-lg'>
            {" "}
            {/* Tambahkan kelas CSS fixed-top */}
            <span className='block text-center text-slate-200'>
              Berhasil di copy, Bang ! 👍
            </span>
          </div>
        </div>
      )}
    </>
  );
}
