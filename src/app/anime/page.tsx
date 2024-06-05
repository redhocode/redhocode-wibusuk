"use client";
import Loading from "@/app/loading";
import MangaCard from "@/components/Data-Card";
import Header from "@/components/Data-Card/header";
import { Card, CardContent } from "@/components/ui/card";
import SearchInput from "@/components/Search/index2";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaginationPage from "@/components/Pagination";
import { useEffect, useState } from "react";
import useFetchDataApi from "@/features/useFatchDataApi";
import Link from "next/link";
import PopularAnime from "@/layout/popular-anime";
import RecomendationAnime from "@/layout/recommendation-anime";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

/**
 * Page component for the Manga Popular page
 * @returns JSX.Element
 */
const Page = () => {


  return (
    <div className="w-full dark:bg-black dark:bg-grid-small-white/[0.1] bg-grid-dot-black/[0.1] bg-grid-sky-400/[0.2] pt-8">
      <div className="container">
        <TextGenerateEffect words="Anime" className="text-sm" />
      </div>
      <div className="w-full flex pt-4 container pb-2 justify-end">
        <SearchInput />
      </div>
      <RecomendationAnime />
      <PopularAnime />
    </div>
  );
};

export default Page;
