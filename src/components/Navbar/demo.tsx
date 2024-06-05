"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import {Home, FileArchive, FileSearch,Notebook,Library, Menu} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Manga",
      link: "/manga/popular",
      icon: <Notebook className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Anime",
      link: "/anime",
      icon: 
        <Library className="h-4 w-4 text-white dark:text-white" />
      
    },
  ];
  return (
    <>
      <div className="relative">
        <FloatingNav
          navItems={navItems}
          className="bg-gradient-to-r from-sky-400 to-green-300"
        />
      </div>
     
    </>
  );
}
