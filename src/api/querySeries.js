import { keepPreviousData, queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/discover/tv";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

async function fetchSeries(sort, year, genres, rating, page) {
  const genreQuery = genres ? `&with_genres=${genres}` : "";
  const yearQuery = year ? `&first_air_date_year=${year}` : "";
  const ratingQuery = rating ? `&vote_average.gte=${rating}` : "";

  const response = await fetch(`${BASE_URL}?sort_by=${sort}&page=${page}${genreQuery}${yearQuery}${ratingQuery}&api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Faild to fetch Series");
  return response.json()
};

export function queryOptionSeries(sort, year, genres, rating, page) {
  return queryOptions({
    queryKey: ['series', sort, year, genres, rating, page],
    queryFn: () => fetchSeries(sort, year, genres, rating, page),
    staleTime: 20000,
    placeholderData: keepPreviousData,
  });
};
