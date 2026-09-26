import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query"
import { queryOptionMovies } from "../api/queryMovies"



export const Movies = () => {
  const { data, isPending, isError } = useQuery(queryOptionMovies());


  if (isPending) return <p>Loading....</p>
  if (isError) return <p>Something was Wrong!</p>

  return (
    <div>
      {data.results.map(movie => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <Link to={`/movies/${movie.id}`}>Movie {movie.id}</Link>
        </div>
      ))}
    </div>
  )
}
