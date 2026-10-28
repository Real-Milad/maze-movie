import { Outlet } from "react-router"
import { Preload } from "../components/shared/Preload"
import { Header } from "../components/shared/Header"
import { Footer } from "../components/shared/Footer"

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
