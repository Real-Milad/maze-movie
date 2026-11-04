import { useQuery } from "@tanstack/react-query"
import { tmdb, IMG } from "../api/tmdb"

const CATEGORIES = {
  movie:     { type: "movie", path: "/trending/movie/week", params: {} },
  series:    { type: "tv",    path: "/trending/tv/week",    params: {} },
  animation: { type: "movie", path: "/discover/movie", params: { with_genres: 16, sort_by: "popularity.desc" } },
  anime:     { type: "tv",    path: "/discover/tv",    params: { with_genres: 16, with_original_language: "ja", sort_by: "popularity.desc" } },
}

const fetchList = async (category) => {
  const { type, path, params } = CATEGORIES[category]
  const data = await tmdb(path, { language: "en-US", ...params })

  return data.results
    .filter((r) => r.poster_path)
    .map((r) => ({
      id: r.id,
      img: IMG + r.poster_path,
      title: r.title ?? r.name,
      type,
      original_language: r.original_language,
      vote_average: r.vote_average,
      year: (r.release_date ?? r.first_air_date ?? "").split("-")[0],
    }))
}

export const useTmdbList = (category) =>
  useQuery({
    queryKey: ["tmdb", category],
    queryFn: () => fetchList(category),
    staleTime: 60000,
  })