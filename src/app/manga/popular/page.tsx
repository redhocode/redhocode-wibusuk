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
const Page = () => {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  /**
   * Function to handle the back button click
   */
  const handleBackClick = () => {
    router.push("/");
  };

  // Fetch data using the useFetchDataApi hook
  const { isLoading, error, data, refetch } = useFetchDataApi(
    "top/manga",
    24,
    currentPage
  );

  // Effect to run when the current page changes
  useEffect(() => {}, [currentPage]);

  /**
   * Function to handle page change
   * @param {number} page - The page number to change to
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Render the page
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const totalPages = data?.pagination?.last_visible_page || 1;
  const datamanga = data?.data ?? [];
  return (
    <div className="w-full dark:bg-black dark:bg-grid-small-white/[0.1] bg-grid-dot-black/[0.1] bg-grid-sky-400/[0.2]">
      <section className="container  min-h-screen px-4">
        <div className="w-full flex justify-between pt-4">
          {/* Back button */}
          <Button variant="outline" onClick={handleBackClick}>
            <ArrowBigLeft className="h-10 w-8" />
          </Button>
          <SearchInput />
        </div>
        <Header title="Manga Popular" linkHerf={""} linkTitle={""} />
        <Card className="pb-6 min-h-screen">
          <CardContent></CardContent>
          {/* Render MangaCards for each data item */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {datamanga.length > 0 ? (
              datamanga.map((api: any) => (
                <div key={api.mal_id}>
                  <Link
                    href={`/manga/${api.mal_id}`}
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

          {/* Pagination component */}
          {datamanga.length > 0 && (
            <PaginationPage
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
            />
          )}
        </Card>
      </section>
    </div>
  );
};

export default Page;
