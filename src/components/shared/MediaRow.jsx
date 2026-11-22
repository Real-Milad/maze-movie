import { useTmdbList } from "../../hooks/useTmdbList"
import { InfinitSlider } from "../home/InfinitSlider"

export const MediaRow = ({ title, category, mode, direction }) => {
  const { data = [], isLoading, isError } = useTmdbList(category, mode)

  if (isError) return null

  return (
    <section>
      <h2 className="font-roboto-slab text-[22px] bg-neutral-400 dark:bg-neutral-600/50 rounded-[5px] mx-13 h-15 text-center flex-center text-white tracking-wider mt-30">{title}</h2>
      <InfinitSlider 
        items={data} 
        direction={direction} 
        className={isLoading ? "opacity-0" : "opacity-100 duration-500"} 
      />
    </section>
  )
}