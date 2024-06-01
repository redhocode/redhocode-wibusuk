"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useFetchData } from "@/features/useFetchData";
const Content = () => {
    const {isLoading,error,data } = useFetchData();

   const renderContent = () => {
        return data?.data.map((manga: any)=>{
            return (
              <>
                <Card key={manga.mal_id} className="w-auto m-4">
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
                      height={200}
                      width={200}
                      alt="image"
                      className="w-full h-full object-cover"
                      />
                    </CardContent>
                </Card>
              </>
            );
    });
    };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-slate-200">
      {renderContent()}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Content;
