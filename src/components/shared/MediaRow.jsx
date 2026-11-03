import { useTmdbList } from "../../hooks/useTmdbList"
import { InfinitSlider } from "../home/InfinitSlider"

export const MediaRow = ({ title, category, mode, direction }) => {
  const { data = [], isLoading, isError } = useTmdbList(category, mode)

  if (isError) return null

  return (
    <section className="mt-24">
      <h2 className="text-2xl font-bold px-6">{title}</h2>
      <InfinitSlider 
        items={data} 
        direction={direction} 
        className={isLoading ? "opacity-0" : "opacity-100 duration-500"} 
      />
    </section>
  )
}