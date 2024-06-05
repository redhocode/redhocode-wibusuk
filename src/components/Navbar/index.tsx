"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Package2,
  Settings,
  Search,
  CircleUser,
  LogOut,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchInput from "@/components/Search";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/manga", label: "Manga" },
    { href: "/anime", label: "Anime" },
  ];

  if (!mounted) {
    return null; // Avoid rendering on the server
  }

  return (
    <>
      <header className="sticky top-0 flex md:h-20 h-16 items-center gap-4 bg-[#008DDA] px-4 md:px-6">
        <div className="w-full md:container mx-auto flex justify-between items-center">
          <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
            <Link href="#" className="text-lg font-semibold text-slate-50">
              <span className="sr-only">Redhocode Inc</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#f9f9f9] transition-colors hover:text-slate-300 hover:animate-pulse text-semibold ${
                  pathname === item.href ? "text-[#F7EEDD] dark:text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-muted-foreground transition-colors hover:text-foreground ${
                      pathname === item.href ? "text-foreground" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4">
            <SearchInput />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
