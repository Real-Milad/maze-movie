import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function getVisiblePages(currentPage, totalPage) {

  if (totalPage <= 7) {
    const pageArray = []
    for (let i = 1; i <= totalPage; i++) {
      pageArray.push(i)
    }
    return pageArray
  }
  else if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPage]
  }
  else if (currentPage >= totalPage - 3) {
    return [1, "...", totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
  }
  else {
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPage]
  }
}



export const Pagination = ({ page, setPage, totalPage }) => {

  const visiblePages = getVisiblePages(page, totalPage)
  
  return (
    <div className="max-w-max my-10 mx-auto w-full px-3">

      <button 
        disabled={page === 1} 
        onClick={() => setPage(prev => prev - 1)}
        className="rounded-lg bg-[#14677c] p-2 text-neutral-200 
        text-[14px] font-bold font-sans hover:bg-[#14677c] disabled:opacity-50"
      ><IoIosArrowBack /></button>

      <div className="inline-flex gap-2 px-4">
        {visiblePages.map((p, i) => 
          <button 
            key={i} 
            onClick={() => p !== "..." && setPage(p) } 
            className={`text-neutral-400 font-bold
              ${page === p && "text-white bg-[#14677c]"} 
              ${p !== "..." && "border border-[#14677c] rounded-lg py-0.5 px-2"} 
            `}
          >{p}</button>
        )}
      </div>

      <button 
        disabled={page === totalPage} 
        onClick={() => setPage(prev => prev + 1)}
        className="rounded-lg bg-[#14677c] p-2 text-neutral-700 
        text-[14px] font-bold font-sans hover:bg-[#14677c] disabled:opacity-50"
      ><IoIosArrowForward /></button>

    </div>
  )
}