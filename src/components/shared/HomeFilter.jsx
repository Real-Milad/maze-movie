import { useState } from "react"
import { InputSearch } from "./InputSearch"
import { SeriesFilter } from "./SeriesFilter"
import { MoviesFilter } from "./MoviesFilter";

export const HomeFilter = () => {
  const [filter, setFilter] = useState('movies');

  return (
    <div className="bg-black/30 backdrop-blur-md mx-1 bg-[url(noise.webp)]">
      <InputSearch />

      <select onChange={(e) => setFilter(e.target.value)} className=" filterSelect">
        <option value="movies">Movies</option>
        <option value="series">Series</option>
      </select>

      {filter === "movies" ? <MoviesFilter /> : <SeriesFilter />}
    </div>
  )
}
