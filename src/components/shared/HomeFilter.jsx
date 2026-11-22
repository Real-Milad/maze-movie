import { useState } from "react"
import { InputSearch } from "./InputSearch"
import { SeriesFilter } from "./SeriesFilter"
import { MoviesFilter } from "./MoviesFilter";

export const HomeFilter = () => {
  const [filter, setFilter] = useState('movies');

  return (
    <div className="px-3 py-5 font-lato tracking-wide mt-25 mb-10  xl:mt-10 xl:w-full mx-auto xl:mx-auto xl:flex xl:justify-center xl:items-center gap-2 bg-neutral-600/50 rounded-2xl">
      <InputSearch />

      <div className="xl:w-40 w-full xl:ml-6">
        <select onChange={(e) => setFilter(e.target.value)} className="filterSelect w-full my-2 px-2 appearance-none">
          <option value="movies">Movies</option>
          <option value="series">Series</option>
        </select>
      </div>

      {filter === "movies" ? <MoviesFilter /> : <SeriesFilter />}
    </div>
  )
}
