import { useEffect, useState } from "react";
import { PiStarFill } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import { querySliderOption } from "../../api/querySliders";
import { FaLanguage } from "react-icons/fa6";
import { useNavigate } from "react-router";


const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const Hero = () => {
  const { data } = useQuery(querySliderOption())
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.slice(0,6).length);
    }, 10000);

    return () => clearInterval(timer);
  }, [data, activeIndex]);


  return (
    <div className="w-full h-190 2xl:h-200 gap-3 overflow-hidden px-10 pt-8 max-w-470 mx-auto hidden xl:flex">
      {data?.slice(0, 6).map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={slide.id} onClick={() => setActiveIndex(index)}
            className={`relative cursor-pointer overflow-hidden hover:brightness-80
            rounded-[15px] transition-all duration-1000 border-2 border-neutral-700
            ${isActive ? "flex-10" : "flex-1 "}`}
          >
            {/* cover Movie */}
            <img src={`${IMAGE_URL}${slide.backdrop_path}`} alt={slide.title} className="w-full h-full object-cover"/>

            {/* wallpaper movie */}
            <img src={`${IMAGE_URL}${slide.poster_path}`} alt={slide.title} className={`${isActive ? "opacity-100" : "opacity-0"} w-40 object-cover absolute left-3 border-2 rounded-[7px] transition-all border-neutral-300/50 duration-900 top-3`}/>

            {/* verticall title movie */}
            <div className={`absolute 2xl:left-6 xl:left-3 bottom-6 flex-center bg-white/10 backdrop-blur-md shadow-lg p-4 rounded-lg text-[26px] w-max [writing-mode:sideways-lr] text-white/60 tracking-widest font-kavoon bg-[url(noise.webp)] ${isActive ? "opacity-0 duration-75" : "opacity-100 duration-700"}`}>
              <p>{slide.title}</p>
            </div>

            {/* Movie details */}
            <div 
            className={`absolute flex h-36  inset-x-2 bottom-2 rounded-2xl text-white justify-between
            transition-all p-3 z-10 bg-white/10 backdrop-blur-md shadow-lg gap-8 bg-[url(noise.webp)]
            ${isActive ? "opacity-100 delay-800 duration-900" : "opacity-0 duration-100"}`}
            >
              <div className="flex justify-between w-full h-full overflow-hidden">

                <div className="left flex flex-col flex-1 gap-2">
                  <div className="flex items-center gap-5">
                    <h2 className="text-[25px] font-bold  font-roboto-slab tracking-wider text-neutral-300">{slide.title}</h2>
                    <p className="text-[25px] font-bold  font-roboto-slab tracking-wider text-neutral-300">{slide.release_date.split("-")[0]}</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <p className="flex items-center gap-2 tracking-widest"><PiStarFill /> {slide.vote_average.toFixed(1)}</p>
                    <p className="flex items-center gap-2 tracking-widest"><FaLanguage /> {slide.original_language.toUpperCase()}</p>
                  </div>

                  <div>
                    <button onClick={() => navigate(`/movies/${slide.id}`)} className="bg-white/90 cursor-pointer text-black font-roboto-slab px-4 py-1 mt-1 rounded-[5px] z-20">More Info</button>
                  </div>
                </div>

                <div className="right flex-1">
                  <p className="overflow-hidden font-geist-mono">{slide.overview}</p>
                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}