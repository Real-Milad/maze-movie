import { useQuery } from "@tanstack/react-query";
import { querySearchOption } from "../api/querySearch";
import { useSearchParams } from "react-router";
import { Pagination } from "../components/shared/Pagination";
import { MovieCard } from "../components/shared/MovieCard";
import { useState } from "react";
import { InputSearch } from "../components/shared/InputSearch";

export const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const query = searchParams.get("q");

  const setPage = (newPage) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage)
    setSearchParams(params)
  }

  const [activeId, setActiveId] = useState(false);
  const { data, isPending, isError } = useQuery(querySearchOption(query, page));
  const totalPage = data?.total_pages;

  
  if (!query) return <InputSearch />
  if (isPending) return <p>Loading....</p>
  if (isError) return <p>Something was wrond!</p>

  return (
    <div>
      <InputSearch />
      <div className="mt-15 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-10 mx-3 md:mx-20 xl:mx-30 relative">
        {data.results.filter(item => item.media_type !== "person").map(movie => (
          <MovieCard 
            type={movie.media_type}
            key={movie.id} 
            movie={movie} 
            isActive={activeId === movie.id}
            onToggle={() => setActiveId(prev => (prev === movie.id ? null : movie.id))}
          />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  )
}
