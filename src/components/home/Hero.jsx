import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { querySliderOption } from "../../api/querySliders";
import { MdCalendarToday } from "react-icons/md";
import { PiStarFill } from "react-icons/pi";



export const Hero = () => {

  const { data } = useQuery(querySliderOption())

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.slice(0,6).length);
    }, 7000);

    return () => clearInterval(timer);
  }, [data]);


  return (
    <div className="flex w-full h-180 gap-3 overflow-hidden px-10 pt-10 max-w-470 mx-auto">
      {data?.slice(0, 6).map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={slide.id} onClick={() => setActiveIndex(index)}
          className={`relative cursor-pointer overflow-hidden rounded-[15px] transition-all duration-900 
          ${isActive ? "flex-9" : "flex-1  brightness-75"}`}>
            <img src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`} alt="" className="w-full h-full object-cover" />
            <div className={`absolute flex inset-x-0 bottom-0 z-10 p-5 text-white transition-all duration-500 bg-neutral-800/70 ${isActive ? "opacity-100 delay-800" : "opacity-0"}`}>

              <img src={`https://image.tmdb.org/t/p/original${slide.poster_path}`} alt="" className="w-25" />
              <h2 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">{slide.title}</h2>
              <div>
                <span><MdCalendarToday /></span>
                <span>{slide.release_date.split("-")[0]}</span>
              </div>
              <p><PiStarFill /> {slide.vote_average.toFixed(1)}</p>
              <p className="max-w-md text-sm leading-relaxed opacity-90 md:text-base">{slide.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}