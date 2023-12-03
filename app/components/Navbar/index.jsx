import Link from "next/link";
import InputSearch from "./Input.Search";
import UserAction from "./UserAction";

export default function Navbar(){
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <Link href="/" className="font-bold text-white text-2xl">Animlog</Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  )
}