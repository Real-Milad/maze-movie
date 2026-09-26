import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router"


export const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
