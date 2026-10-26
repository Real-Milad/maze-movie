import logo from "../../assets/logo.png"


export const MobileMenu = () => {


  return (
    <div className="fixed w-full h-20 bg-neutral-200 bottom-0 z-50 flex justify-between bg-[url(noise.webp)] shadow-black shadow-2xl">
      <div className="size-10 bg-neutral-700"></div>
      <div className="size-10 bg-neutral-700"></div>
      <img src={logo} alt=""  className=""/>
      <div className="size-10 bg-neutral-700"></div>
      <div className="size-10 bg-neutral-700"></div>
    </div>
  )
}
