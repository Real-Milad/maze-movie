import { useQuery } from "@tanstack/react-query"
import { querySliderOption } from "../../api/querySliders"
import { useEffect, useState } from "react";
import { PiStarFill } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { MdDateRange } from "react-icons/md";


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



  return (
    <section id="Home" className="relative w-full h-dvh z-2 text-center overflow-hidden xl:hidden ">

      {slides?.map((slide, i) => {
        return (

          <div key={i} className={`
            slider-item  w-full h-full grid absolute  z-2
             place-content-center transition-all duration-1000
            ${index === i ? "active opacity-100 visible" : "opacity-0 invisible"}
          `}>

            <div className="w-full h-full absolute top-0 left-0 -z-1 pointer-events-none"> 
              <img src={`${IMAGE_URL}${slide.backdrop_path}`} alt={slide.title} key={i} width={1880} height={950} className="w-full h-full object-cover mask-[linear-gradient(to_bottom,black_0%,black_30%,transparent_100%)]"/>
            </div>

            <div className="absolute slider-reveal count bottom-1 left-1 right-1 p-2 flex h-40 bg-white/10 backdrop-blur-md shadow-2xs rounded-[7px] bg-[url(noise.webp)]  text-neutral-300 font-roboto-slab">

              <img src={`${IMAGE_URL}${slide.poster_path}`} alt={slide.title} className={`slider-reveal hero-banner object-cover border-2 rounded-[7px] transition-all border-neutral-300/50 duration-900`}/>

              <div className="flex flex-col items-start ml-4 gap-7 w-full">
                <p className="slider-reveal hero-title text-[19px] tracking-widest relative">
                  {slide.title}
                </p>

                <div className="flex justify-between items-center w-full ">
                  <div className="flex flex-col items-start gap-4">
                    <p className="flex justify-center items-center gap-2 slider-reveal hero-date text-[12px] relative tracking-[5px]">
                      <MdDateRange />{slide.release_date.split("-")[0]}
                    </p>

                    <p className="flex justify-center items-center gap-2 hero-title hero-lang slider-reveal text-[12px] tracking-[5px]">
                      <FaLanguage />{slide.original_language.toUpperCase()}
                    </p>
                    
                    <p className="flex justify-center items-center gap-2 hero-text hero-vote  slider-reveal tracking-wider text-[12px]">
                      <PiStarFill />{slide.vote_average.toFixed(1)}
                    </p>
                  </div>
                  <button className="absolute right-2 bottom-2 bg-black py-2 px-3 rounded-[5px]" onClick={() => navigate(`/movies/${slide.id}`)}>More Info</button>
                </div>

              </div>
            </div>
          
          </div>
        )
      })}
      

      <button onClick={prev} className="absolute top-1/2 left-14 translate-y-[-50%] z-5 text-5xl text-gold-crayola hidden size-18 md:grid place-items-center  rotate-45 border border-gold-crayola hover:bg-gold-crayola hover:text-black transition duration-500 ">
        <ion-icon name="chevron-back" className="-rotate-45"></ion-icon>
      </button>

      <button onClick={next} className="absolute top-1/2 right-14 translate-y-[-50%] z-5 text-5xl text-gold-crayola hidden size-18 md:grid place-items-center  rotate-45 border border-gold-crayola hover:bg-gold-crayola hover:text-black transition duration-500 ">
        <ion-icon name="chevron-forward" className="-rotate-45"></ion-icon>
      </button>

      
    </section>
  )
}
