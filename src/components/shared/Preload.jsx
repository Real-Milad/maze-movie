import { DNA } from "react-loader-spinner";
import { useEffect, useState } from "react";



export const Preload = () => {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("preloading", !load);

    const timer = setTimeout(() => {
      setLoad(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [load]);



  return (
    <div className={`
      fixed inset-0 flex-center flex-col bg-dark-bg bg-[url(noise.webp)]
      duration-900 delay-500 z-99 ${load && "translate-y-full"}`}>

      <div className={`duration-250 ${load && "opacity-0"}`}>
        <DNA height="150" width="150" dnaColorOne="#cbcbcb" dnaColorTwo="#cbcbcb" />
      </div>

      <div className="w-full h-max">
        <p className={`
          text-[40px] md:text-[60px] xl:text-[70px] font-geostar-fill text-center text-transparent tracking-wide
          bg-size-[500%] bg-clip-text bg-loading-text animate-preload-text duration-250 
          ${ load && "opacity-0" }
        `}>Maze Movie</p>
      </div>

    </div>
  );
};