import { queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

async function fetchMovies(movieId) {
  const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error("Faild to fetch movies");
  return response.json();
};

export function queryOptionMovieDetails(id) {
  return queryOptions({
    queryKey: ['movies', id],
    queryFn: () => fetchMovies(id),
  });
};
