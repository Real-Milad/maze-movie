import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router"
import { Preload } from "../components/shared/Preload"
import { useEffect, useState } from "react"


export const RootLayout = () => {
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      isDark
    );
  }, [isDark]);


  return (
    <div>
      <Preload />
      <Header isDark={isDark} onChange={setIsDark} />
      <Outlet />
      <Footer />
    </div>
  )
}
