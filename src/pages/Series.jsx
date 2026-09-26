import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query"
import { queryOptionSeries } from "../api/querySeries";


export const Series = () => {
  const { data, isPending, isError } = useQuery(queryOptionSeries());

  if (isPending) return <p>Loading....</p>
  if (isError) return <p>Something was Wrong!</p>

  return (
    <div>
      {data.results.map(series => (
        <div key={series.id}>
          <p>{series.name}</p>
          <Link to={`/series/${series.id}`}>Movie {series.id}</Link>
        </div>
      ))}
    </div>
  )
}
