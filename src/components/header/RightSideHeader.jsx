
export const RightSideHeader = () => {


  return (
    <div className="flex-center mt-25 gap-2 font-geist-mono uppercase tracking-widest flex-1 text-[#e7e7e7]">
      <BiUser size={20}/>
      <Link 
        ref={login} 
        onMouseOver={() => handleHover(login, 'LOGIN')} 
        onMouseOut={() => handleHover(login, 'LOGIN')}
      >LOGIN</Link>
    </div>
  )
}
