import { useState } from "react"
import { InputSearch } from "./InputSearch"
import { SeriesFilter } from "./SeriesFilter"
import { MoviesFilter } from "./MoviesFilter";

export const HomeFilter = () => {
  const [filter, setFilter] = useState('movies');

  return (
    <div className="px-2 py-5 font-lato tracking-wide mt-3 xl:mt-10 md:mt-30 md:mx-19">
      <InputSearch />

      <div className="w-full">
        <select onChange={(e) => setFilter(e.target.value)} className="filterSelect w-full my-2 px-2 appearance-none">
          <option value="movies">Movies</option>
          <option value="series">Series</option>
        </select>
      </div>

      {filter === "movies" ? <MoviesFilter /> : <SeriesFilter />}
    </div>
  )
}
