import { useRef } from "react";
import { BiUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg"
import { Link, NavLink } from "react-router"


export const MobileMenu = ({ toggleMenu, setToggleMenu }) => {
  const homeNav = useRef(null);
  const moviesNav = useRef(null);
  const seriesNav = useRef(null);
  const newsNav = useRef(null);
  const login = useRef(null);
  
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
    <div 
      className={`fixed inset-0 flex items-center pt-30 flex-col bg-neutral-900 bg-[url(noise.webp)] z-10
      transition-all duration-500 ${toggleMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      <CgClose size={40} onClick={() => setToggleMenu(false)} className="absolute top-7 right-7"/>
        <Link to="/" className="text-[34px] text-white/90 font-geostar-fill mb-25 tracking-widest md:text-[40px]">Maze Movie</Link>
          
        <nav className="font-geist-mono uppercase flex-center flex-col text-[#e7e7e7] gap-7 tracking-widest text-[19px]">
          {navbar.map(item => (
            <NavLink key={item.id} to={item.to} ref={item.ref}
              onMouseOver={() => handleHover(item.ref, item.originalText)}
              onMouseOut={() => handleHover(item.ref, item.originalText)}>
              {item.title}
            </NavLink>
          ))}
        </nav>

          <div className="flex-center mt-25 gap-2 font-geist-mono uppercase tracking-widest text-[#e7e7e7]">
            <BiUser size={20}/>
            <Link 
              ref={login} 
              onMouseOver={() => handleHover(login, 'LOGIN')} 
              onMouseOut={() => handleHover(login, 'LOGIN')}
            >LOGIN</Link>
          </div>

        </div>
  )
}
