import { FaLanguage } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { PiStarFill } from "react-icons/pi";
import { useNavigate } from "react-router";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const MovieCard = ({ movie, isActive, onToggle }) => {
  const navigate = useNavigate()


  return (
    <div data-active={isActive} onClick={onToggle} className="w-full h-full relative group overflow-hidden rounded-[5px] z-5">

      

      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} className={`w-full h-full xl:group-hover:brightness-40 object-cover transition-all duration-700 ${isActive ? "brightness-40" : "brightness-100"}`}/>
      
      <div className={`
        absolute bottom-0 left-0 w-full h-full bg-white/10 backdrop-blur-md xl:translate-y-[110%] 
        xl:group-hover:translate-y-0  transition-transform duration-800 ease-in-out p-2
        ${isActive ? "translate-y-0" : "translate-y-[110%]"} flex flex-col justify-between
      `}>

        <div className="flex justify-between text-white px-1 text-[18px]">
          <p className="flex justify-center items-center gap-2">
            <FaLanguage />{movie.original_language.toUpperCase()}
          </p>
          
          <p className="flex justify-center items-center gap-2">
            <PiStarFill />{movie.vote_average.toFixed(1)}
          </p>
        </div>

        <h1 className="text-neutral-300 text-[18px] text-center  ">{movie.title}</h1>

        <div className="flex justify-between items-center text-white">
          <p className="flex items-center justify-center gap-2 text-[14px]">
            <MdDateRange />{movie.release_date.split("-")[0]}
          </p>

          <button className="bg-neutral-900 py-2 px-3 text-[14px] rounded-[5px] cursor-pointer hover:bg-neutral-800 transition-all " onClick={() => navigate(`/movies/${movie.id}`)}>
            More Info
          </button>
        </div>

      </div>
        
    </div>
  )
}
