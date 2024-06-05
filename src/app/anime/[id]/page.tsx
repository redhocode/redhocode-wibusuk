"use client";
import React from "react";
import useFetchDataApi from "@/features/useFatchDataApi"
import Loading from "@/app/loading";
import { Card, CardContent,CardDescription,CardHeader,CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/Search";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import VideoPlayer from "@/components/Video";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  const router = useRouter();
  const { isLoading, error, data } = useFetchDataApi(`anime/${id}`, 8, 1);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

const handleBackClick=()=>{
  router.back();
}

  return (
    <>
      <div className="w-full dark:bg-black dark:bg-grid-small-white/[0.1] bg-grid-dot-black/[0.1] bg-grid-sky-400/[0.2]">
        <div className="w-full flex justify-between md:pt-24 md:container md:px-4 pt-2">
          {/* Back button */}
          <Button variant="outline" onClick={handleBackClick}>
            <ArrowBigLeft className="h-10 w-8" />
          </Button>
          <SearchInput />
        </div>
        <div className="container px-4 flex justify-center py-4">
          <Card className="w-full mt-4 h-auto">
            <CardHeader>
              <CardTitle>
                <p className="text-3xl font-bold text-black dark:text-white">
                  {data?.data.title} - {data?.data.title_japanese}
                </p>
                <p className="text-neutral-500 text-xl">{data?.data.year}</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center md:flex-nowrap flex-wrap">
                <div className="">
                  <Badge
                    variant="default"
                    className="w-[100px] flex-col gap-2 h-auto py-4"
                  >
                    <h3 className="font-bold">Type</h3>
                    {data?.data.type}
                  </Badge>
                </div>
                <div className="">
                  <Badge
                    variant="default"
                    className="w-[100px] flex-col gap-2 py-4"
                  >
                    <h3>Rank</h3>
                    {data?.data.rank}
                  </Badge>
                </div>
                <div className="">
                  <Badge
                    variant="default"
                    className="w-[100px] flex-col gap-2 py-4"
                  >
                    <h3>Season</h3>
                    {data?.data.season}
                  </Badge>
                </div>
                <div className="">
                  <Badge
                    variant="default"
                    className="w-[100px] flex-col gap-2 py-4"
                  >
                    <h3>Episodes</h3>
                    {data?.data.episodes}
                  </Badge>
                </div>
                <div className="">
                  <Badge
                    variant="default"
                    className="w-[100px] flex-col gap-2 py-4"
                  >
                    <h3>Source</h3>
                    {data?.data.source}
                  </Badge>
                </div>
                <div className="">
                  <Badge
                    variant="default"
                    className="w-auto flex-col gap-2 py-4"
                  >
                    <h3>Rating</h3>
                    {data?.data.rating}
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardContent>
              <div className="flex gap-4 mx-4 pt-4 sm:flex-nowrap flex-wrap">
                <Image
                  src={data?.data.images.webp.large_image_url}
                  height={250}
                  width={250}
                  alt={data?.data.images.webp.large_image_url}
                  className="w-[800px] object-cover cursor-pointer shadow-md rounded"
                />

                <p className="text-justify">{data?.data.synopsis}</p>

              </div>
            
          <div className="flex justify-center mx-auto items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full mt-4 h-10">Preview Trailer</Button>
          </SheetTrigger>

          <SheetContent side="top" className="md:w-[800px]">
            <SheetHeader>
              <SheetTitle>
                <p className="justify-center flex">

                Trailer {data?.data.title}
                </p>
                </SheetTitle>
              <SheetDescription>
                <p className="text-neutral-500 justify-center flex mb-4">
                  {data?.data.year}
                </p>
              </SheetDescription>
            </SheetHeader>
            <VideoPlayer videoId={data?.data.trailer.youtube_id} />
          
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="justify-center flex mx-auto mt-4 md:w-[360px] w-full">Exit</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
          </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;
