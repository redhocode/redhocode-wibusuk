"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { useFetchData } from "@/features/useFetchData";
import Link from "next/link";
const Content = () => {
  const { isLoading, error, data } = useFetchData();

  const renderContent = () => {
    return data?.data.map((manga: any) => {
      return (
        <>
        <Link href={`/${manga.mal_id}`} className="cursor-pointer">
          <Card key={manga.mal_id} className="w-auto m-4 h-[500px]">
            <CardHeader>
              <CardTitle>
                <span>{manga.title}</span>
              </CardTitle>
              <CardDescription>
                <span>{manga.score}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={manga.images.webp.image_url}
                height={250}
                width={200}
                alt="image"
                className="w-full h-full object-cover"
                />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
                </Link>
        </>
      );
    });
  };
  return (
    <>
    <div className="p-4 flex justify-between">
        <h3 className="text-2xl font-semibold">Populer</h3>
        <Link href={`/popular`} className="text-xl hover:text-sky-500 transition-all">View All</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {renderContent()}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
    </div>
    </>
  );
};

export default Content;
