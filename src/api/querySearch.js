import { keepPreviousData, queryOptions } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/search/multi";
const API_KEY  = "b35075d745427f1b6e88aee35137fe1b";

export const searchFetch = async (query, page) => {
  const response = await fetch(`${BASE_URL}?query=${encodeURIComponent(query)}&page=${page}&api_key=${API_KEY}`);

  if (!response.ok) throw new Error("Fail to Search Movies or Series");

  const searchData = await response.json();

  console.log(searchData)
  return searchData
}

export function querySearchOption(query, page) {
  return queryOptions({
    queryKey: ['search', query, page],
    queryFn: () => searchFetch(query, page),
    staleTime: 20000,
    enabled: !!query,
    placeholderData: keepPreviousData,
  });
};
