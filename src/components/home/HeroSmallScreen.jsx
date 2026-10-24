import { useQuery } from "@tanstack/react-query"
import { querySliderOption } from "../../api/querySliders"
import { useEffect, useState } from "react";
import { PiStarFill } from "react-icons/pi";
import { FaImdb, FaLanguage } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { MdDateRange } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";


export const HeroSmallScreen = () => {
  const { data: slides } = useQuery(querySliderOption())
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()

  function prev() {
    setIndex(index => index === 0 ? slides?.slice(0,6).length - 1 : index - 1);
  };
  
  function next() {
    setIndex(index => index === slides?.slice(0,6).length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  }, [index]);

  console.log(slides)


  return (
    <section id="Home" className="relative w-full h-dvh z-2 text-center overflow-hidden xl:hidden">

      {slides?.map((slide, i) => 

        <div 
          key={i} 
          className={`slider-item size-full absolute z-2 place-content-center transition-all duration-1000
            ${index === i ? "active opacity-100 visible" : "opacity-0 invisible"}`
          }
        >
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"/>

          <div className="size-full absolute top-0 left-0 -z-1 pointer-events-none bg-black"> 
            <img 
              src={`${IMAGE_URL}${slide.backdrop_path}`} 
              alt={slide.title} 
              key={i} 
              width={1880} 
              height={950} 
              className="size-full object-cover"/>
          </div>

          <div className="absolute slider-reveal count inset-0 flex-center gap-5 
          flex-col bg-[url(noise.webp)] text-neutral-300 font-roboto-slab">

            <img 
              src={`${IMAGE_URL}${slide.poster_path}`} 
              alt={slide.title} 
              className={`slider-reveal hero-banner object-cover border-2 rounded-[7px] w-40 h-60 transition-all border-neutral-300/50 duration-900`}
            />

            <div className="flex-center flex-col gap-7 w-full">
              <p className="slider-reveal hero-title text-[30px] w-[90%] tracking-widest relative">
                {slide.title}
              </p>

              <div className="flex justify-center items-start gap-4 slider-reveal hero-date">
                <p className="flex items-center gap-2 ">
                  <MdDateRange size={25} />
                  {slide.release_date.split("-")[0]}
                </p>

                <p className="flex items-center gap-2 tracking-widest">
                  <FaImdb size={25} /> 
                  {slide.vote_average.toFixed(1)}
                </p>

                <p className="flex items-center gap-2 tracking-widest">
                  <LiaLanguageSolid size={25} /> 
                  {slide.original_language.toUpperCase()}
                </p>
                
              </div>

              <button 
                className="slider-reveal hero-lang bg-light py-2 px-9 text-black rounded-[5px] mt-5" 
                onClick={() => navigate(`/movies/${slide.id}`)}
              >More Info</button>
           


            </div>
          </div>
        
        </div>
      )}
      

      <button onClick={prev} className="absolute top-1/2 left-6 translate-y-[-50%] z-5 text-2xl text-white hidden size-10 md:grid place-items-center rotate-45 border transition duration-500 ">
        <ion-icon name="chevron-back" className="-rotate-45 text-white/80"></ion-icon>
      </button>

      <button onClick={next} className="absolute top-1/2 right-6 translate-y-[-50%] z-5 text-2xl text-white hidden size-10 md:grid place-items-center rotate-45 border transition duration-500 ">
        <ion-icon name="chevron-forward" className="-rotate-45 text-white/80"></ion-icon>
      </button>

      
    </section>
  )
}
