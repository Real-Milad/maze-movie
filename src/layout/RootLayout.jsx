import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router"
import { Preload } from "../components/shared/Preload"

export const RootLayout = () => {

  return (
    <div>
      <Preload />

      <Header />

      <Outlet />
      
      <Footer />
    </div>
  )
}
