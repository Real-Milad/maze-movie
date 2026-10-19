
import { useQuery } from "@tanstack/react-query"
import { MovieCard } from "../components/shared/MovieCard";
import { useEffect, useState } from "react";
import { Pagination } from "../components/shared/Pagination";
import { queryOptionSeries } from "../api/querySeries";




export const Series = () => {

  const totalPage = 10
  const [page, setPage] = useState(1)
  const [activeId, setActiveId] = useState(false);
  const { data, isPending, isError } = useQuery(queryOptionSeries(page));

  useEffect(() => {
    window.scrollTo(0,0);
  }, [page]);

  if (isPending) return <p>Loading....</p>

  if (isError) return <p>Something was Wrong!</p>

  return (
    <>
      
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


























// import { Link } from "react-router";
// import { useQuery } from "@tanstack/react-query"
// import { queryOptionSeries } from "../api/querySeries";


// export const Series = () => {
//   const { data, isPending, isError } = useQuery(queryOptionSeries());

//   if (isPending) return <p>Loading....</p>
//   if (isError) return <p>Something was Wrong!</p>

//   return (
//     <div>
//       {data.results.map(series => (
//         <div key={series.id}>
//           <p>{series.name}</p>
//           <Link to={`/series/${series.id}`}>Movie {series.id}</Link>
//         </div>
//       ))}
//     </div>
//   )
// }
