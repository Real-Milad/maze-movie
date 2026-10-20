import { useQuery } from "@tanstack/react-query"
import { queryOptionMovies } from "../api/queryMovies"
import { MovieCard } from "../components/shared/MovieCard";
import { useEffect, useState } from "react";
import { Pagination } from "../components/shared/Pagination";
import { MoviesFilter } from "../components/shared/MoviesFilter";
import { useSearchParams } from "react-router";


export const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "popularity.desc";
  const year = searchParams.get("year");
  const genres = searchParams.get("genres");
  const rating = searchParams.get("rating");

  const page = Number(searchParams.get("page") ?? 1);

  const setPage = (newPage) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage)
    setSearchParams(params)
  }

  const [activeId, setActiveId] = useState(false);
  const { data, isPending, isError } = useQuery(queryOptionMovies(sort, year, genres, rating, page));
  const totalPage = data?.total_pages;
  console.log(totalPage)


  useEffect(() => {
    window.scrollTo(0,0);
  }, [page]);


  if (isPending) return <p>Loading....</p>
  if (isError) return <p>Something was Wrong!</p>


  return (
    <>
      <MoviesFilter />
      
      <div className="mt-15 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-10 mx-3 md:mx-20 xl:mx-30 relative">
        {data.results.map(movie => 
          <MovieCard 
            key={movie.id}
            movie={movie} 
            isActive={activeId === movie.id}
            onToggle={() => setActiveId(prev => (prev === movie.id ? null : movie.id))}
          />
        )}
      </div>

      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </>
  )
}
