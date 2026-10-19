import { keepPreviousData, queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/discover/tv";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

async function fetchSeries(page) {
  const response = await fetch(`${BASE_URL}?language=en-US&sort_by=popularity.desc&page=${page}&api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Faild to fetch Series");
  const data = await response.json()
  console.log(data.results)
  return data
};

export function queryOptionSeries(page) {
  return queryOptions({
    queryKey: ['series', page],
    queryFn: () => fetchSeries(page),
    staleTime: 20000,
    placeholderData: keepPreviousData,
  });
};
