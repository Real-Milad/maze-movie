import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";
import { queryOptionMovieDetails } from "../api/queryMovieDetails";


export const MoviesDetails = () => {
  const { id } = useParams()
  const { data, isPending } = useQuery(queryOptionMovieDetails(id));

  if (isPending) return <p>Loading</p>

  return (
    <div>
      <p>{data.title}</p>
    </div>
  )
}
