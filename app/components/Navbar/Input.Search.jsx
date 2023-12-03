"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter()

  const handleSearch = (e) => {
    const keyword = searchRef.current.value

    if(!keyword || keyword.trim() == "") return 

    if(e.key === "Enter" || e.type === 'click'){
      e.preventDefault();
      router.push(`/search/${keyword}`)
    }

  }; 

  return (
    <div className="relative">
      <input
        ref={searchRef}
        placeholder="Cari anime"
        className="w-full p-2 rounded"
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch} className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
