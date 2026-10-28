import logoLight from "../../assets/Maze_logo.gif"
import logoDark from "../../assets/Maze_logo_black.gif"
import { CgClose, CgMenuRight } from "react-icons/cg";

import { Link } from "react-router";
import { NavLinks } from "../header/NavLinks";
import { useEffect, useRef, useState } from "react";


export const Header = () => {
  const headRef = useRef(null);
  const lastScrollposRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);


  function hideHeader() {
    const isScrollbottom = lastScrollposRef.current < window.scrollY;

    if (isScrollbottom) {
      headRef.current.style.transform = "translateY(-100%)"
    } 
    else {
      headRef.current.style.transform = "translateY(0)";
    }

    lastScrollposRef.current = window.scrollY;
  };
  
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 30) {
        setScroll(true);
        hideHeader();
      } 
      else {
        setScroll(false);
        headRef.current.style.transform = "translateY(0)";
        lastScrollposRef.current = window.scrollY;
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", toggleMenu);
  }, [toggleMenu]);

    
  return (
    <>
      <header 
        ref={headRef}  
        className={`fixed top-0 inset-x-0 flex justify-between items-center transition-all
        max-w-480 mx-auto px-3 md:px-7 xl:px-12 py-2 md:py-5 lg:py-3 duration-700 z-15
        bg-[url(noise.webp)] ${scroll ? "bg-[#191919]" : "bg-transparent bg-none"}`}
      >
        <div className="h-13 flex items-center flex-1 lg:justify-start gap-3">
          <img src={logoDark} alt="" className={`w-7 xl:w-9 hidden  ${scroll ? "" : "xl:block xl:dark:hidden"}`}/>
          <img src={logoLight} alt="" className={`w-7 xl:w-9  ${scroll ? "" : "xl:hidden xl:dark:block"}`}/>

          <Link 
            to="/" 
            className={`font-geostar-fill text-white xl:text-black xl:dark:text-white 
            text-[23px] tracking-wider md:text-[35px] flex-center gap-3 ${scroll && "xl:text-white"}`}
          >Maze Movie</Link>
        </div>

        <NavLinks scroll={scroll} type="bigscreen" /> 

        <CgMenuRight 
          onClick={() => setToggleMenu(true)} 
          className="text-light text-[33px] md:text-[40px] xl:hidden" 
        />
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 flex items-center pt-30 flex-col dark:bg-neutral-900
        bg-light-bg bg-[url(noise.webp)] z-50 transition-all duration-500 
        ${toggleMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <CgClose 
          size={40} 
          onClick={() => setToggleMenu(false)} 
          className="absolute top-7 right-7 dark:text-light text-black transition-all duration-500"
        />

        <Link 
          to="/" 
          className="text-[34px] dark:text-light transition-all duration-500 
          text-black font-geostar-fill mb-25 tracking-widest md:text-[40px"
        >Maze Movie</Link>

        <NavLinks scroll={scroll} type="smallscreen" />
      </div>
    </>
  )
}
