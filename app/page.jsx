import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNesterAnimeResponse, reproduce } from "../libs/fetcher";

export default async function Page() {

  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnime = await getNesterAnimeResponse("recommendations/anime", "entry")  
  recommendedAnime = reproduce(recommendedAnime, 8)
  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="lihat semua"
        />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header
          title="Rekomendatsi"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}
