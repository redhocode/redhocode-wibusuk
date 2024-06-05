
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import Navbar from "@/components/Navbar";
import Navbardemo from "@/components/Navbar/demo";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Portofolio Web Wibu",
  description: "Portofolio ini berisi konten rekomedasi manga dan anime",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
          <Navbardemo />
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
