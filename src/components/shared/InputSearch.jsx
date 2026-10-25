import { Form } from "react-router"


export const InputSearch = () => {

  return (
    <div className="w-full mx-auto text-white rounded-[9px]">
      <Form method="get" action="search" className="w-full">
        <input name="q" placeholder="Search Movies & Series ..." className="bg-light text-black/70 outline-none placeholder:text-black/50 placeholder:text-[15px] font-semibold  w-full h-11 rounded-[9px] px-2" />
        <button type="submit" className="w-full bg-neutral-600 mt-2 py-2 rounded-[9px]">Search</button>
      </Form>
    </div>
  )
}
