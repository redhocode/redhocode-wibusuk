"use client";

import Loading from "@/app/loading";
import MangaCard from "@/components/Data-Card";
import Header from "@/components/Data-Card/header";
import { Card, CardContent } from "@/components/ui/card";
import SearchInput from "@/components/Search";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaginationPage from "@/components/Pagination";
import { useEffect, useState } from "react";
import useFetchDataApi from "@/features/useFatchDataApi";
import Link from "next/link";

/**
 * Page component for the Manga Popular page
 * @returns JSX.Element
 */
const PopularAnime = () => {




  // Fetch data using the useFetchDataApi hook
  const { isLoading, error, data, refetch } = useFetchDataApi(
    "top/anime",
    8,
    1
  );


  // Render the page
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

 
  const dataanime = data?.data ?? [];
  return (

      <section className="container px-4 pb-2">
        <Card className="pb-6">
          <CardContent>
        <Header title="Anime Popular" linkHerf={"anime/popular"} linkTitle={"See All"} />

          </CardContent>
          {/* Render MangaCards for each data item */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dataanime.length > 0 ? (
              dataanime.map((api: any) => (
                <div key={api.mal_id}>
                  <Link
                    href={`/anime/${api.mal_id}`}
                    className="cursor-pointer"
                  >
                    <MangaCard api={api} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex justify-center">No data available</div>
            )}
          </div>

         
        
        </Card>
      </section>
   
  );
};

export default PopularAnime;
