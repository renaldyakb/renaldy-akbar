import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Head from "next/head";

export default function RateCard() {
  const [notionData, setNotionData] = useState<Array<any>>([]);

  useEffect(() => {
    fetchDataFromNotion(); // Panggil fungsi untuk mengambil data Notion
  }, []);

  async function fetchDataFromNotion() {
    const databaseId = "68012bd7577a46469352066e57bb9983"; // Ganti dengan ID basis data Notion Anda
    try {
      const response = await fetch(`/api/notion-data?databaseId=${databaseId}`);
      const data = await response.json();
      setNotionData(data); // Set data ke state
      console.log(data);
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
      <div className=''>
        <table className='table table-fixed w-10/12 mx-auto'>
          <thead className='text-center'>
            <tr>
              <td>Plan</td>
              <td>Feed</td>
              <td>Story</td>
              <td>Video/Bumper</td>
              <td>Revision</td>
              <td>Price</td>
            </tr>
          </thead>
          {notionData.length > 0 ? (
            // Buat salinan data dan urutkan berdasarkan Price
            [...notionData]
              .sort(
                (a, b) =>
                  a.properties.Price?.number - b.properties.Price?.number
              )
              .map((targetRow: any, index: number) => (
                <tbody key={index} className='text-center'>
                  <tr>
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
                      {targetRow.properties.Revision?.rich_text[0]?.plain_text}
                    </td>
                    <td className='text-right'>
                      Rp. {targetRow.properties.Price?.number.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              ))
          ) : (
            <Loading />
          )}
        </table>
      </div>
    </>
  );
}
