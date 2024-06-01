"use client"
import Manga from "@/components/Manga";
import Navbar from "@/components/Navbar";
import { error } from "console";
import { Suspense } from "react";
import Loading from "./loading";
export default function Home() {

  return (
    <>
      <Navbar />
      <div className="container bg-slate-100 min-h-screen">
        <Manga />
      </div>
    </>
  );
}