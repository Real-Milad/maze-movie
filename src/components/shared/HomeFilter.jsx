import { useState } from "react"
import { InputSearch } from "./InputSearch"
import { SeriesFilter } from "./SeriesFilter"
import { MoviesFilter } from "./MoviesFilter";

export const HomeFilter = () => {
  const [filter, setFilter] = useState('movies');

  return (
    <div className="
      px-3 py-5 font-lato tracking-wide bg-neutral-600/40 mx-auto gap-2 rounded-2xl mb-10
      md:mt-5   
      xl:mt-10 xl:w-full xl:mx-auto xl:flex xl:justify-center xl:items-center 
    ">

      <InputSearch />

      <div className="2xl:w-40 w-full xl:w-full xl:ml-6">
        <select onChange={(e) => setFilter(e.target.value)} className="filterSelect w-full my-2 px-2 appearance-none">
          <option value="movies">Movies</option>
          <option value="series">Series</option>
        </select>
      </div>

      {filter === "movies" ? <MoviesFilter /> : <SeriesFilter />}
    </div>
  )
}
