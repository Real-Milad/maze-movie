import { useQuery } from "@tanstack/react-query"
import { querySliderOption } from "../../api/querySliders"
import { useEffect, useState } from "react";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";




export const HeroSmallScreen = () => {
  const { data: slides } = useQuery(querySliderOption())
  const [index, setIndex] = useState(0);



  function prev() {
    setIndex(index => index === 0 ? slides?.slice(0,6).length - 1 : index - 1);
  };
  
  function next() {
    setIndex(index => index === slides?.slice(0,6).length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const interval = setInterval(next, 8000);
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
              <img src={`${IMAGE_URL}${slide.backdrop_path}`} alt={slide.title} key={i} width={1880} height={950} className="w-full h-full object-cover"/>
            </div>

            <p className="slider-reveal text-[12px] relative font-bold tracking-[5px] mx-auto uppercase text-gold-crayola mb-4 
              md:text-[18px] lg:text-[15px] lg:mt-50 ">
              test
            </p>

            <img src={`${IMAGE_URL}${slide.poster_path}`} alt={slide.title} className={`slider-reveal w-30 object-cover absolute left-3 border-2 rounded-[7px] transition-all border-neutral-300/50 duration-900 bottom-5`}/>

            <h1 className="hero-title slider-reveal text-neutral-300 text-[50px] leading-25 tracking-[5px] font-Story mb-20 
              md:text-[75px] md:leading-35 md:mb-20 lg:text-[120px] lg:tracking-[9px] lg:leading-60 lg:mb-25">
              test
            </h1>
            
            <p className="hero-text text-gold-crayola/80 slider-reveal font-primary tracking-wider mb-10 text-[15px]
              md:text-[20px] md:mb-20 lg:text-[22px] w-110 md:w-150 lg:w-300 mx-auto">
              Come with family & feel the joy of mouthwatering food
            </p>
          
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
