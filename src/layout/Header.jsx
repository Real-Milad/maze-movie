import { useState } from "react";
import { Link } from "react-router"
import { CgMenuRight } from "react-icons/cg";
import { MobileMenu } from "../components/header/MobileMenu";
import { BigScreenNavLinks } from "../components/header/BigScreenNavLinks"

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

    
  return (
    <header className="bg-neutral-800/90 w-full bg-[url(noise.webp)] py-4 md:py-5 flex justify-between items-center px-3 md:px-6 ">
      <div className="flex-1 lg:justify-start">
        <Link to="/" className="font-geostar-fill text-[#e7e7e7] text-[26px] tracking-wider md:text-[35px]">Maze Movie</Link>
      </div>

      <BigScreenNavLinks />

      <CgMenuRight onClick={() => setToggleMenu(true)} className=" text-[#e7e7e7] text-[33px] md:text-[40px] lg:hidden " />

      <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}  />

    </header>
  )
}
