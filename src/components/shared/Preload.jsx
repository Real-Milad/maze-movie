import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

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
    <div className={`fixed inset-0 flex-center flex-col z-20 delay-500  bg-[url(noise.webp)]
    duration-900 bg-black ${load && "translate-y-full"}`}>

      <div className={`duration-250 ${load && "opacity-0"}`}>
        <DNA height="200" width="200" dnaColorOne="#0c1513" dnaColorTwo="#0c1510" />
      </div>

      <p className={`
        text-[100px] font-geostar-fill leading-60 tracking-[16px] text-transparent 
        bg-size-[500%] bg-clip-text bg-loading-text animate-preload-text duration-250 
        ${ load && "opacity-0" }
      `}>Maze Movie</p>

    </div>
  );
};