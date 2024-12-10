import Header from "@/app/components/Dashboard/Header";
import { authUserSession } from "@/libs/authLib";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = authUserSession();

  const myCollection = await prisma.collection.findMany({
    where: {
      user_gmail: user.email,
    },
  });

  return (
    <section className="mt-4 w-full">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {myCollection.map((itemCollection, index) => {
          return (
            <Link key={index} className="relative" href={`/anime/${itemCollection.anime_mal_id}`}>
              <Image
                className="w-full"
                src={itemCollection.anime_image}
                alt=""
                width={350}
                height={350}
              />
              <div className="w-full bg-color-accent h-16 absolute bottom-0 flex justify-center items-center">
                <h5 className="text-xl text-center ">{itemCollection.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
