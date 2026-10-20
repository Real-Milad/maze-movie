import { Form } from "react-router"


export const InputSearch = () => {

  return (
    <div className="w-[95%] mx-auto mt-20 h-50 bg-neutral-700/50 text-white">
      <Form method="get" action="/search">
        <input name="q" placeholder="Search Movies & Series" />
        <button type="submit">Search</button>
      </Form>
    </div>
  )
}
