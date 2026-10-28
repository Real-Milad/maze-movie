import { useRef } from "react";
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { ThemeToggle } from "../shared/ThemeToggle";


export const NavLinks = ({ scroll, type }) => {
  const login = useRef(null);
  const newsNav = useRef(null);
  const homeNav = useRef(null);
  const moviesNav = useRef(null);
  const seriesNav = useRef(null);
  
  const navbar = [
    {id: 1, title: "HOME", to: "/", ref: homeNav, originalText: "HOME"},
    {id: 2, title: "MOVIES", to: "/movies", ref: moviesNav, originalText: "MOVIES"},
    {id: 3, title: "SERIES", to: "/series", ref: seriesNav, originalText: "SERIES"},
    {id: 4, title: "NEWS", to: "/news", ref: newsNav, originalText: "NEWS"},
  ];
  
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


  return (
    <div className={`
      ${type === "bigscreen" && "hidden xl:flex flex-3 items-center"}
      ${type === "smallscreen" && "flex flex-col"}
    `}>
      <nav className={`
        font-geist-mono uppercase dark:text-light text-black transition-all duration-500 tracking-wider text-[16px] 
        ${type === "bigscreen" && "flex-center flex-2 gap-15 h-13"}
        ${type === "smallscreen" && "flex flex-col text-center gap-8 text-[17px] mb-17 -mt-9"}
      `}>
        {navbar.map(item => (
          <NavLink key={item.id} to={item.to} ref={item.ref} className={`${scroll ? "text-white" : ""}`}
            onMouseOver={() => handleHover(item.ref, item.originalText)}
            onMouseOut={() => handleHover(item.ref, item.originalText)}>
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className={`
        font-geist-mono uppercase tracking-wider transition-all duration-500 dark:text-light text-black
        ${scroll ? "text-light" : "text-black"}   
        ${type === "bigscreen" && "flex items-center justify-end flex-1 gap-8"}
        ${type === "smallscreen" && "flex-center flex-col gap-6"}
      `}>
        <div className="flex-center text-[15px]">
          <BiUser size={18} className="mr-1"/>
          <Link 
            ref={login} 
            onMouseOver={() => handleHover(login, 'LOGIN')} 
            onMouseOut={() => handleHover(login, 'LOGIN')}
          >LOGIN</Link>
        </div>

        <div>
          <ThemeToggle scale={0.4} />
        </div>
      </div>
    </div>
  )
}
