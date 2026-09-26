import { queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/tv";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

async function fetchSeries(seriesId) {
  const response = await fetch(`${BASE_URL}/${seriesId}?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error("Faild to fetch series");
  return response.json();
};

export function queryOptionSeriesDetails(id) {
  return queryOptions({
    queryKey: ['series', id],
    queryFn: () => fetchSeries(id),
  });
};
