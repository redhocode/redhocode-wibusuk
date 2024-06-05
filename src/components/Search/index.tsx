import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
type Props = {};

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchRef.current) {
      const keyword = searchRef.current.value
      if(!keyword || keyword.trim()==="") return
      if (keyword) {
        router.push(`/search/manga/${keyword}`);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };
  return (
    <>
      <div className="relative ml-3 flex-1 md:grow-0">
        <Input
          type="search"
          placeholder="Search..."
          ref={searchRef}
          className="w-full rounded-lg bg-background pl-10 md:w-[200px] lg:w-[320px] h-12 shadow-md" // Sesuaikan padding kiri untuk ikon
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="ghost"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0" onClick={handleSearch}
        >
          <Search className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </>
  );
};

export default SearchInput;
