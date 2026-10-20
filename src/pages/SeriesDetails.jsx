import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";
import { FaImdb } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { queryOptionSeriesDetails } from "../api/querySeriesDedails";


const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const SeriesDetails = () => {
  const { id } = useParams()
  const { data, isPending } = useQuery(queryOptionSeriesDetails(id));


  if (isPending) return <p>Loading</p>


  return (
    <div className="w-full h-max mt-50 relative ">

      <img 
        src={`${IMAGE_URL}${data?.backdrop_path}`} 
        alt={data.name} 
        className="h-full w-full object-cover brightness-50 absolute inset-0"
      />

      <div className="bg-white/10 backdrop-blur-sm p-5">

        <div className="text-white/80 tracking-wider text-center font-roboto-slab py-9 text-4xl">
          <h1 className="text-shadow-lg text-shadow-black/70">{data.name}</h1>
        </div>

        <div className="flex gap-5 mb-15">
          <img 
            src={`${IMAGE_URL}${data.poster_path}`} 
            alt={data.name} 
            className="w-50 rounded-[9px]"
          />

          <div className=" justify-between font-roboto-slab text-white/80 text-shadow-lg text-shadow-black/20 flex flex-col py-3">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <MdDateRange size={35} />
                {data.release_date}
              </p>

              <p className="flex items-center gap-2 tracking-widest">
                <FaImdb size={35} /> 
                {data.vote_average.toFixed(1)}
              </p>

              <p className="flex items-center gap-2 tracking-widest">
                <LiaLanguageSolid size={35} /> 
                {data.original_language.toUpperCase()}
              </p>
            </div>

            <div>
              <p className="mb-1">Genres: </p>
              {data.genres.map(g => (
                <p key={g.id} className="text-white/50">{g.name}</p>
              ))}
            </div>
          </div>

        </div>


        <div className="text-white/70 font-roboto-slab tracking-wider mb-10">
          <p>{data.overview}</p>
        </div>

        <div className="flex justify-between font-roboto-slab mb-15">
          <a href={data.homepage} className="bg-white/80 px-5 py-1 hover:text-white/80 hover:bg-black/50 transition-all ">Original Page</a>

          <a href={`https://www.imdb.com/title/${data.imdb_id}`} className="bg-white/80 px-5 py-1 hover:text-white/80 hover:bg-black/50 transition-all ">IMDB Page</a>
        </div>

      </div>
      
    </div>
  )
}
