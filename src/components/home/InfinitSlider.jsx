import { infSlide } from "../../data/images"

export const InfinitSlider = () => {
  return (
    <div className="cont w-[98%] max-w-[1900px] h-87.5 mx-auto mt-52 flex 
      gap-4 lg:gap-10 overflow-hidden select-none mask-x-from-97% mask-x-to-98%">
        
      <ul className="min-w-full flex shrink-0 justify-between 
        items-center gap-4 lg:gap-10 animate-[scroll_18s_linear_infinite] lg:animate-[scrollbig_18s_linear_infinite] ">
        {infSlide.map(img =>
          <li key={`second-${img.id}`}>
            <img src={img.img} className="w-40 h-60 lg:w-50 lg:h-75 object-cover 
            duration-500 grayscale-100 hover:grayscale-0 mask-x-from-98% 
            mask-x-to-99% mask-y-from-98% mask-y-to-99%"/>
          </li>
        )}
      </ul>

      <ul className="min-w-full flex shrink-0 justify-between 
        items-center gap-4 animate-[scroll_18s_linear_infinite] lg:animate-[scrollbig_18s_linear_infinite]">
        {infSlide.map(img =>
          <li key={`second-${img.id}`}>
            <img src={img.img} className="w-40 h-60 lg:w-50 lg:h-75 object-cover 
            duration-500 grayscale-100 hover:grayscale-0 mask-x-from-98% 
            mask-x-to-99% mask-y-from-98% mask-y-to-99%"/>
          </li>
        )}
      </ul>
    </div>
  )
}