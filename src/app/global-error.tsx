"use client";
import React from "react";
import { Button } from "@/components/ui/button";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl">Something went wrong!</h2>
          <Button variant="link" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
