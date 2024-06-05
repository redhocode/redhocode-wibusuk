/* eslint-disable @next/next/no-async-client-component */

/**
 * Page component for the search anime results page.
 * This component fetches anime data based on the provided keyword
 * and renders the search results along with the header and search input.
 */
"use client";
import React from "react";
import MangaCard from "@/components/Data-Card";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Data-Card/header";
import Loading from "@/app/loading";
import SearchInput from "@/components/Search";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import useFetchDataApi from "@/features/useFatchDataApi";
import Link from "next/link";
interface PageProps {
  params: { keyword: string };
  decodedKeyword: string;
}

/**
 * Renders the search anime results page.
 *
 * @param {PageProps} props - The props containing the decoded keyword.
 * @return {JSX.Element} The JSX element representing the search anime results page.
 */
const Page = async ({ params }: PageProps) => {
  const router = useRouter();

  /**
   * Handles the back button click event.
   * Navigates back to the previous page.
   */
  const handleBackClick = () => {
    router.back();
  };

  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const { isLoading, error, data, refetch } = useFetchDataApi(
    "anime?q=" + decodedKeyword,
    8,
    1
  );

  /**
   * Checks if the data is still loading.
   * If loading, displays a loading spinner.
   * If error, displays an error message.
   * If data is available, displays the search results.
   */
  if (isLoading) {
    return <Loading />;
  }
 
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="w-full dark:bg-black bg-white  dark:bg-dot-small-white/[0.1] bg-grid-dot-black/[0.1] bg-dot-black/[0.1]">
        <section className="container bg-[]] min-h-screen px-4">
          <div className="w-full flex justify-between mt-4">
            <Button variant="ghost" onClick={handleBackClick}>
              <ArrowBigLeft className="h-10 w-10" />
            </Button>
            <SearchInput />
          </div>
          <Header
            title={`Pencarian Untuk : ${decodedKeyword}`}
            linkTitle=""
            linkHerf=""
          />
          <Card>
            <CardContent></CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data?.data.map((api: any) => (
                <>
                  <div key={api.mal_id}>
                    <Link
                      href={`/anime/${api.mal_id}`}
                      className="cursor-pointer"
                    >
                      <MangaCard api={api} />
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Page;

