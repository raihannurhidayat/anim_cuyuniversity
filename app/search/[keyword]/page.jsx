import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/fetcher";

export default async function page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header
          title={`pencarian untuk ${decodedKeyword}...`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
