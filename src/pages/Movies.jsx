import { useQuery } from "@tanstack/react-query"
import { queryOptionMovies } from "../api/queryMovies"
import { MovieCard } from "../components/shared/MovieCard";
import { useEffect, useState } from "react";
import { Pagination } from "../components/shared/Pagination";




export const Movies = () => {

  const totalPage = 10
  const [page, setPage] = useState(1)
  const [activeId, setActiveId] = useState(false);
  const { data, isPending, isError } = useQuery(queryOptionMovies(page));

  useEffect(() => {
    window.scrollTo(0,0);
  }, [page]);

  if (isPending) return <p>Loading....</p>

  if (isError) return <p>Something was Wrong!</p>

  return (
    <>
      <div className="mt-30 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-10 mx-3 md:mx-20 xl:mx-30 relative">
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
