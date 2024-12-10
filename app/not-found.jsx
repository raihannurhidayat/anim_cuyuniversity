"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen mx-auto max-w-xl flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-color-accent transition-all  font-bold text-4xl">
          Not Found
        </h3>
        <button
          className="hover:text-color-accent text-color-primary"
          onClick={() => router.back()}
          href="/"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
