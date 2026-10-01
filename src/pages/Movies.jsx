import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query"
import { queryOptionMovies } from "../api/queryMovies"


const IMAGE_URL = "https://image.tmdb.org/t/p/original";


export const Movies = () => {
  const { data, isPending, isError } = useQuery(queryOptionMovies());


  if (isPending) return <p>Loading....</p>
  if (isError) return <p>Something was Wrong!</p>

  return (
    <div className="mt-22 grid grid-cols-2 xl:grid-cols-7 p-2 mx-2 gap-7">
      {data.results.map(movie => (

        <div key={movie.id} className="card  w-50">

          <div>
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} className={`w-full object-cover transition-all  duration-900`}/>
          </div>

          <div>
            <p className="text-white text-center">{movie.title}</p>
          </div>

        </div>

      ))}
    </div>
  )
}
