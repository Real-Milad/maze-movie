import { useQuery } from "@tanstack/react-query"
import { tmdb, IMG } from "../api/tmdb"

const CATEGORIES = {
  movie:     { path: "/discover/movie", dateField: "primary_release_date", params: {} },
  series:    { path: "/discover/tv",    dateField: "first_air_date",        params: {} },
  animation: { path: "/discover/movie", dateField: "primary_release_date", params: { with_genres: 16 }, skipJa: true },
  anime:     { path: "/discover/tv",    dateField: "first_air_date",        params: { with_genres: 16, with_original_language: "ja" } },
}

const TYPE = { movie: "movie", series: "tv", animation: "movie", anime: "tv" }

const fetchList = async (category, mode) => {
  const { path, dateField, params, skipJa } = CATEGORIES[category]
  const today = new Date().toISOString().slice(0, 10)

  const sortParams =
    mode === "latest"
      ? {
          sort_by: `${dateField}.desc`,
          [`${dateField}.lte`]: today, 
          "vote_count.gte": 10,       
        }
      : { sort_by: "popularity.desc", "vote_count.gte": 50 }

  const data = await tmdb(path, { language: "en-US", ...params, ...sortParams })

  return data.results
    .filter((r) => r.poster_path)
    .filter((r) => !(skipJa && r.original_language === "ja"))
    .map((r) => ({
      id: r.id,
      img: IMG + r.poster_path,
      title: r.title ?? r.name,
      type: TYPE[category],
      original_language: r.original_language,
      vote_average: r.vote_average,
      year: (r.release_date ?? r.first_air_date ?? "").split("-")[0],
    }))
}

export const useTmdbList = (category, mode = "popular") =>
  useQuery({
    queryKey: ["tmdb", category, mode],
    queryFn: () => fetchList(category, mode),
    staleTime: 1000 * 60 * 60,
  })