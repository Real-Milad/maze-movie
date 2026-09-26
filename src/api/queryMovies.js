import { queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

async function fetchMovies() {
  const response = await fetch(`${BASE_URL}?language=en-US&sort_by=popularity.desc&page=1&api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Faild to fetch movies");
  return response.json();
};

export function queryOptionMovies() {
  return queryOptions({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
};
