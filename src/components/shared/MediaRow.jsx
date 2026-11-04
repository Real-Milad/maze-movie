import { useTmdbList } from "../../hooks/useTmdbList"
import { InfinitSlider } from "../home/InfinitSlider"

export const MediaRow = ({ title, category, mode, direction }) => {
  const { data = [], isLoading, isError } = useTmdbList(category, mode)

  if (isError) return null

  return (
    <section>
      <h2 className="font-kavoon bg-neutral-400 mx-3 h-10 text-center flex-center text-white tracking-widest">{title}</h2>
      <InfinitSlider 
        items={data} 
        direction={direction} 
        className={isLoading ? "opacity-0" : "opacity-100 duration-500"} 
      />
    </section>
  )
}