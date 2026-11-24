import { Form } from "react-router"


export const InputSearch = () => {

  return (
    <div className="w-full xl:w-[40%] mx-auto text-white rounded-[9px] mb-5 md:mb-5 xl:mb-0 md:w-full md:mx-0 mr-5">

      <Form method="get" action="/search" className="w-full flex-center">

        <input name="q" placeholder="Search Movies & Series ..." className="bg-light text-black/70 outline-none placeholder:text-black/50 placeholder:text-[15px] font-semibold w-full h-11 rounded-l-[9px] px-2" autoComplete="false" />

        <button type="submit" className="bg-neutral-600  py-2 px-3 h-11 rounded-r-[9px] hover:bg-neutral-800 duration-400">Search</button>
        
      </Form>
    </div>
  )
}
