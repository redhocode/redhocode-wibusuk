import React from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import Link from "next/link";
interface MangaCardProps {
  api: any; // Ganti 'any' dengan tipe data yang lebih spesifik jika tersedia
  search?: string; 
  index?: string
  // Make searchTerm an optional prop
}

const DataCard: React.FC<MangaCardProps> = ({ api,index }) => {
  return (
   
      <CardContainer
        key={index}
        className="m-2 -mt-12 bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl shadow-lg"
      >
        <CardBody className="w-full h-auto p-4">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white h-16"
          >
            {api.title || api.name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {api.score || api.name_kanji}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={
                api.images?.webp?.image_url
              }
              height={200}
              width={400}
              className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
 
  );
};

export default DataCard;
