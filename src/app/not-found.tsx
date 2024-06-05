"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FileSearch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Component for displaying a 'Not Found' page.
 *
 * @returns {TSX.Element} The rendered 'Not Found' page.
 */
export default function NotFound() {
  const router = useRouter();

  /**
   * Handles the click event for the 'Go Back' button.
   * Navigates the user back to the previous page.
   */
  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex justify-center flex-col mx-auto items-center min-h-screen gap-4">
      {/* Search icon */}
      <FileSearch className="w-20 h-20 text-[#008DDA]" />
      {/* Page title */}
      <h2 className="text-3xl font-bold text-[#008DDA]">Not Found</h2>
      {/* Button to go back */}
      <Button
        variant={"outline"}
        onClick={handleBackClick}
        className="mt-4 px-4 py-2"
      >
        Go Back
      </Button>
    </div>
  );
}

