import { queryOptions } from "@tanstack/react-query"


async function fetchMovies() {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b35075d745427f1b6e88aee35137fe1b')
  if (!response.ok) throw new Error("Faild to Fetch Movies")

  const data = await response.json()
  return data.results
}

export const querySliderOption = () => {
  return queryOptions({
    queryKey: ['slider'],
    queryFn: fetchMovies
  })
}
