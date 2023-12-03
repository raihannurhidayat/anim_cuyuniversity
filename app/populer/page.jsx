"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "../components/utilities/HeaderMenu";
import Pagination from "../components/utilities/Pagination";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "../../libs/fetcher";

export default function Page() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setData(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`anime Terpopuler #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        lastPage={data.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}
