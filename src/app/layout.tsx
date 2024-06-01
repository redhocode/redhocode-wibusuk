
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "List Anime",
  description: "List Anime",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ReactQueryProvider>
      <body className={inter.className}>{children}</body>
    </ReactQueryProvider>
    </html>
  );
}
