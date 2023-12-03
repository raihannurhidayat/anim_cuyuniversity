"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen mx-auto max-w-xl flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={32} className="text-color-accent"/>
        <h3 className="text-color-accent transition-all  font-bold text-4xl">Not Found</h3>
        <Link className="hover:text-color-accent text-color-primary" href='/'>Kembali</Link>
      </div>
    </div>
  );
}
