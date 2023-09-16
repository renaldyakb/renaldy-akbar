import { Builder } from "@builder.io/sdk";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import TruncateText from "./truncrate";
import React, { useEffect, useState } from "react";
import KartuLoading from "./kartu-loading";
import CarouselSlick from "./ImageCarousel";
import { url } from "inspector";

interface RowData {
  properties: {
    Gambar: any;
    Judul?: { title?: [{ text?: { content?: string } }] };
    Catagory?: { select?: { name?: string } };
    Tentang?: { rich_text?: [{ text?: { content?: string } }] };
    waktu_pembuatan?: { date?: { start?: string; end?: string } };
    cover?:
      | {
          files?:
            | {
                file?:
                  | {
                      url?: string | undefined;
                    }
                  | undefined;
              }[]
            | undefined;
        }
      | undefined;
    // Tambahkan properti lain yang sesuai
  };
  id: string;
  // Tambahkan properti lain yang sesuai
}

interface NotionRowProps {
  targetRowId: string;
}

export default function KartuNotion({ targetRowId }: NotionRowProps) {
  const router = useRouter();

  const [targetRow, setTargetRow] = useState<RowData | null>(null);

  useEffect(() => {
    fetchDataFromNotion(); // Panggil fungsi untuk mengambil data Notion
  }, []);

  async function fetchDataFromNotion() {
    const databaseId = "df3c03a1efdc4f4ba0939f4c3ae6d54f"; // Ganti dengan ID basis data Notion Anda
    try {
      const response = await fetch(`/api/notion-data?databaseId=${databaseId}`);
      const data: RowData[] = await response.json(); // Menentukan jenis data
      const foundRow = data.find((row) => row.id === targetRowId);
      if (foundRow) {
        setTargetRow(foundRow); // Set data row yang ditemukan ke dalam state
      } else {
        console.warn(`Row with ID "${targetRowId}" not found`);
      }
    } catch (error) {
      console.error("Error fetching data from Notion:", error);
    }
  }

  if (!targetRow) {
    return <KartuLoading />; // Tampilkan pesan loading jika data masih diambil
  }

  const longText =
    targetRow.properties.Tentang?.rich_text?.[0]?.text?.content ||
    "Tentang not available";

  const urlImage = (targetRow.properties.Gambar?.files?.length
    ? targetRow.properties.Gambar?.files.map(
        (file: { file: { url: any } }) => file?.file?.url
      )
    : null) || ["/img-default.png"];

  return (
    <>
      <div
        className='group bg-gray-800 max-w-max hover:bg-yellow-700 cursor-pointer rounded-lg h-72 shrink-0 relative animate__animated animate__fadeIn'
        // onClick={() => navigateToPage("/blogs/medan")}
      >
        <div className='bg-black relative group hover:bg-neutral-900 from-grey-500 duration-75 max-w-max border-gray-700 inline-block overflow-hidden w-72 h-72  group-hover:border-slate-400 border-2'>
          <div className='n group-hover:scale-110 group-hover:grayscale duration-100 group-hover:blur-sm'>
            <CarouselSlick images={urlImage} />
          </div>

          <div className='bg-gradient-to-t from-black from-10% via-black via-30% to-90% h-72  opacity-0 group-hover:opacity-70 w-72 left-0 absolute bottom-[-5px]'></div>
          <div className='bg-gradient-to-t from-black from-10% via-black via-30% to-90% h-72  opacity-0 group-hover:opacity-70 w-72 left-0 absolute bottom-[-5px]'></div>
        </div>

        <div className='absolute mb-3 p-8 text-center opacity-0 duration-350 group-hover:opacity-100 max-w-full group-hover:bottom-[-8px]'>
          <span className='text-amber-600 text-[9px] font-semibold border-amber-600 border-[1px] px-3 py-[2px] mb-3 rounded-full'>
            {/* Katagori */}
            {targetRow.properties.Catagory?.select?.name ||
              "Category not available"}
          </span>
          <h1 className='group-hover:text-gray-100 text-3xl mb-1 mt-2 font-bold capitalize'>
            {/* Judul */}
            {targetRow.properties.Judul?.title?.[0]?.text?.content ||
              "Title not available"}
          </h1>

          <TruncateText kata={longText} limit={14} />
        </div>
      </div>
    </>
  );
}
