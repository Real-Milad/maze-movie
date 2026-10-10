import { useEffect, useRef, useState } from "react";
import { Link } from "react-router"
import { CgMenuRight } from "react-icons/cg";
import { MobileMenu } from "../components/header/MobileMenu";
import { BigScreenNavLinks } from "../components/header/BigScreenNavLinks"


export const Header = ({isDark, onChange}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const headRef = useRef(null)
  const lastScrollposRef = useRef(null)
  const [scroll, setScroll] = useState(false);
  

  const hideHeader = () => {
    const isScrollbottom = lastScrollposRef.current < window.scrollY;
    isScrollbottom 
      ? headRef.current.style.transform = "translateY(-100%)"
      : headRef.current.style.transform = "translateY(0)"
    lastScrollposRef.current = window.scrollY;
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScroll(true);
        hideHeader();
      } else {
        setScroll(false);
        headRef.current.style.transform = "translateY(0)";
        lastScrollposRef.current = window.scrollY;
      }
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
      <header ref={headRef}  className={`fixed top-0 left-0 right-0 mx-auto duration-700 transition-all w-full  py-2 md:py-5 lg:py-1 flex max-w-480 z-10 
      justify-between items-center px-3 ${scroll ? "bg-[#131b19]" : "bg-transparent"}`}>

        <div className="flex-1 lg:justify-start h-13 lg:pl-5 flex items-center">
          <Link to="/" className="font-geostar-fill text-[#e7e7e7] text-[26px] tracking-wider md:text-[35px]">Maze Movie</Link>
        </div>

        <BigScreenNavLinks isDark={isDark} onChange={onChange} />

        <CgMenuRight onClick={() => setToggleMenu(true)} className="text-[#e7e7e7] text-[33px] md:text-[40px] xl:hidden"/>


      </header>

      <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  )
}
