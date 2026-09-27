import { useRef } from "react";
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router";

export const BigScreenNavLinks = () => {
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
    <div className="hidden lg:flex flex-3">
      <nav className="font-geist-mono uppercase flex-center flex-2 text-[#e7e7e7] gap-13 tracking-widest text-[19px] h-13">
        {navbar.map(item => (
          <NavLink key={item.id} to={item.to} ref={item.ref}
            onMouseOver={() => handleHover(item.ref, item.originalText)}
            onMouseOut={() => handleHover(item.ref, item.originalText)}>
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="flex-center font-geist-mono uppercase tracking-widest flex-1 text-[#e7e7e7] lg:justify-end pr-5">
        <div className="flex-center">
          <BiUser size={20} className="mr-2"/>
          <Link 
            ref={login} 
            onMouseOver={() => handleHover(login, 'LOGIN')} 
            onMouseOut={() => handleHover(login, 'LOGIN')}
          >LOGIN</Link>
        </div>
      </div>
    </div>
  )
}
