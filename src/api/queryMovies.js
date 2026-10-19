import { keepPreviousData, queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

async function fetchMovies(sort, year, genres, rating, page) {
  const genreQuery = genres ? `&with_genres=${genres}` : "";
  const yearQuery = year ? `&primary_release_year=${year}` : "";
  const ratingQuery = rating ? `&vote_average.gte=${rating}` : "";

  const response = await fetch(`${BASE_URL}?sort_by=${sort}&page=${page}${genreQuery}${yearQuery}${ratingQuery}&api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Faild to fetch movies");
  return response.json();
};

export function queryOptionMovies(sort, year, genres, rating, page) {
  return queryOptions({
    queryKey: ['movies', sort, year, genres, rating, page],
    queryFn: () => fetchMovies(sort, year, genres, rating, page),
    staleTime: 20000,
    placeholderData: keepPreviousData,
  });
};
