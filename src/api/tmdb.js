const BASE = "https://api.themoviedb.org/3"
export const IMG = "https://image.tmdb.org/t/p/w342"
const API_KEY = "b35075d745427f1b6e88aee35137fe1b"

export const tmdb = async (path, params = {}) => {
  const url = new URL(BASE + path)
  url.searchParams.set("api_key", API_KEY)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url)
  if (!res.ok) throw new Error(`TMDB error ${res.status}`)
  return res.json()
}