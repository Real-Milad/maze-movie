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
    <div className="max-w-max my-10 mx-auto w-full px-1 py-1 bg-[#9f9f9f] rounded-full flex-center md:gap-5 ">

      <button 
        disabled={page === 1} 
        onClick={() => setPage(page - 1)}
        className="rounded-full bg-[#d3d3d3] py-2 px-4 text-neutral-900 
        text-[15px] font-sans hover:bg-neutral-200 disabled:opacity-50"
      ><IoIosArrowBack /></button>

      <div className="inline-flex gap-0.5 mx-3">
        {visiblePages.map((p, i) => 
          <button 
            key={i} 
            onClick={() => p !== "..." && setPage(p) } 
            className={`text-neutral-800 font-semibold px-2 md:px-4
              ${page === p && "text-black bg-[#d3d3d3] px-3"} 
              ${p !== "..." && " rounded-full py-1"} 
            `}
          >{p}</button>
        )}
      </div>

      <button 
        disabled={page === totalPage} 
        onClick={() => setPage(page + 1)}
        className="rounded-full bg-[#d3d3d3] py-2 px-4 text-neutral-900 
        text-[15px] font-sans hover:bg-neutral-200 disabled:opacity-50"
      ><IoIosArrowForward /></button>

    </div>
  )
}