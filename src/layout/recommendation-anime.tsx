"use client";
import Loading from "@/app/loading";
import MangaCard from "@/components/Data-Card";
import Header from "@/components/Data-Card/header";
import { Card, CardContent } from "@/components/ui/card";
import SearchInput from "@/components/Search";
import useFetchDataApi from "@/features/useFatchDataApi";
import Link from "next/link";
/**
 * Shuffles an array using the Fisher-Yates shuffle algorithm.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Page component for the Manga Popular page
 * @returns JSX.Element
 */
const RecomendationAnime = () => {
  // Fetch data using the useFetchDataApi hook
  const {
    isLoading: isloadingRecom,
    error: errorRecom,
    data: dataRec,
  } = useFetchDataApi("recommendations/anime", 4, 24);

  // Render the page
  if (isloadingRecom) {
    return <Loading />;
  }

  let dataRecommendations = dataRec?.data ?? [];
  // Shuffle the recommendations
 dataRecommendations = shuffleArray(dataRecommendations);
  return (
    <section className="container px-4 pb-2">
      <Card className="pb-6 ">
        <CardContent>
          <Header
            title="Anime Recommendations"
            linkHerf={"/anime/recommendation"}
            linkTitle={"See All"}
          />
          {/* Render MangaCards for each data item */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dataRecommendations.length > 0 ? (
              dataRecommendations.slice(0, 2).map((item: any) =>
                item.entry.map((entry: any) => (
                  <div key={entry.mal_id}>
                    <Link
                      href={`/anime/${entry.mal_id}`}
                      className="cursor-pointer"
                    >
                      <MangaCard api={entry} />
                    </Link>
                  </div>
                ))
              )
            ) : (
              <div className="flex justify-center">No data available</div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RecomendationAnime;
