import { Link } from "react-router";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { NavLinks } from "../components/header/NavLinks";

import logoLight from "../assets/Maze_logo.gif"
import logoDark from "../assets/Maze_logo_black.gif"

export const Header = () => {

    const logo = useRef(null);


  const headRef = useRef(null);
  const lastScrollposRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleHover(element, originalText) {
    let randomChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iteration = 0;
  
    let interval = setInterval(() => {
      element.current.innerText = originalText.split('').map((char, index) => {
        if (index < iteration) return char;
        return randomChar.charAt(Math.floor(Math.random() * randomChar.length));
      }).join('');
  
      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 45);
  }
  

  function hideHeader() {
    const isScrollbottom = lastScrollposRef.current < window.scrollY;
    isScrollbottom 
      ? headRef.current.style.transform = "translateY(-100%)"
      : headRef.current.style.transform = "translateY(0)";
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
        className={`fixed top-0 inset-x-0 flex justify-between items-center z-15
        max-w-480 mx-auto px-4 py-2 md:py-5 lg:py-3 duration-700 transition-all
        bg-[url(noise.webp)] ${scroll ? "bg-[#191919]" : "bg-transparent bg-none"}`}
      >
        <div className="h-13 flex items-center flex-1 lg:justify-start lg:pl-5 gap-3">
          <img src={logoDark} alt="" className="w-7 xl:w-9 hidden xl:block xl:dark:hidden"/>
          <img src={logoLight} alt="" className="w-7 xl:w-9 xl:hidden xl:dark:block"/>
          <Link to="/" className={`font-geostar-fill text-white xl:text-black xl:dark:text-white text-[23px] tracking-wider md:text-[35px] flex-center gap-3`}>
            Maze Movie
          </Link>

    
        </div>

        <NavLinks scroll={scroll} type="bigscreen" /> 

        <CgMenuRight 
          onClick={() => setToggleMenu(true)} 
          className="text-light text-[33px] md:text-[40px] xl:hidden" 
        />
      </header>


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
          text-black font-geostar-fill mb-25 tracking-widest md:text-[40px">
          Maze Movie
        </Link>

        <NavLinks scroll={scroll} type="smallscreen" />

      </div>
    </>
  )
}
