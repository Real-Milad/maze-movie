import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";
import { queryOptionSeriesDetails } from "../api/querySeriesDedails";


export const SeriesDetails = () => {
  const { id } = useParams()
  const { data, isPending } = useQuery(queryOptionSeriesDetails(id));

  
  if (isPending) return <p>Loading</p>

  return (
    <div>
      <p>{data.name}</p>
    </div>
  )
}
