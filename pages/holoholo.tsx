import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Head from "next/head";
import "animate.css";

export default function RateCard() {
  const [notionData, setNotionData] = useState<Array<any>>([]);
  const [isClient, setIsClient] = useState(false); // Tambahkan state untuk mengidentifikasi sisi klien

  useEffect(() => {
    setIsClient(true); // Set isClient ke true setelah hydrasi selesai
    fetchDataFromNotion(); // Panggil fungsi untuk mengambil data Notion
  }, []);

  async function fetchDataFromNotion() {
    const databaseId = "68012bd7577a46469352066e57bb9983"; // Ganti dengan ID basis data Notion Anda
    try {
      const response = await fetch(`/api/notion-data?databaseId=${databaseId}`);
      const data = await response.json();
      setNotionData(data); // Set data ke state
    } catch (error) {
      console.error("Error fetching data from Notion:", error);
    }
  }

  return (
    <>
      <Head>
        <title>Rate Card</title>
        <meta name='description' content='Notion Database Config' />
        <link rel='icon' href='/r-logo.ico' />
      </Head>
      <div className='items-center h-screen justify-center flex flex-col'>
        <table className='table table-fixed w-11/12 bg-stone-900 rounded'>
          <thead className='text-center'>
            <tr className=''>
              <th scope='col' className='w-32'>
                Your Plan
              </th>
              <th scope='col' className='w-4'>
                Feed
              </th>
              <th scope='col'>Story</th>
              <th scope='col' className='break-words'>
                Video / <br /> Bumper
              </th>
              <th scope='col'>Revision</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          {isClient ? (
            // Pastikan pengurutan dan pemformatan harga hanya terjadi di sisi klien
            [...notionData]
              .sort(
                (a, b) =>
                  a.properties.Price?.number - b.properties.Price?.number
              )
              .map((targetRow: any, index: number) => {
                return (
                  <tbody key={index} className='text-slate-400 text-center'>
                    <tr className=''>
                      <td className='text-left'>
                        {targetRow.properties.Plan?.title[0]?.plain_text}
                      </td>
                      <td>{targetRow.properties.feed?.number}</td>
                      <td>
                        {targetRow.properties.story?.rich_text[0]?.plain_text}
                      </td>
                      <td>
                        {targetRow.properties.video?.rich_text[0]?.plain_text}
                      </td>
                      <td>
                        {
                          targetRow.properties.Revision?.rich_text[0]
                            ?.plain_text
                        }
                      </td>
                      <td className='text-right'>
                        Rp.{" "}
                        {targetRow.properties.Price?.number.toLocaleString()}{" "}
                        {/* Format Price */}
                      </td>
                    </tr>
                  </tbody>
                );
              })
          ) : (
            <tbody>
              <tr>
                <td>Loading data...</td>
                <td>Loading data...</td>
                <td>Loading data...</td>
                <td>Loading data...</td>
                <td>Loading data...</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
