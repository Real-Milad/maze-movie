import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { FaLanguage } from "react-icons/fa"
import { PiStarFill } from "react-icons/pi"
import { MdDateRange } from "react-icons/md"

const SPEED = 60
const DRAG_THRESHOLD = 5 // px

export const InfinitSlider = ({ items = [], direction = "rtl", className = "" }) => {
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const firstListRef = useRef(null)
  const s = useRef({ x: 0, hovered: false, dragging: false, moved: false, startX: 0, startOffset: 0, dir: -1 })

  
  const goToDetails = (item) => navigate(item.type === "tv" ? `/series/${item.id}` : `/movies/${item.id}`)

  useEffect(() => {
    s.current.dir = direction === "ltr" ? 1 : -1
  }, [direction])
  
  useEffect(() => {
    let raf
    let last = performance.now()

    const tick = (now) => {
      const dt = (now - last) / 1000
      last = now
      const track = trackRef.current
      const first = firstListRef.current

      if (track && first) {
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0
        const loop = first.offsetWidth + gap

        if (loop > gap) {
          if (!s.current.hovered && !s.current.dragging) {
            s.current.x += s.current.dir * SPEED * dt
          }
          s.current.x = -((((-s.current.x) % loop) + loop) % loop)
          track.style.transform = `translate3d(${s.current.x}px, 0, 0)`
        }
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onPointerDown = (e) => {
    s.current.dragging = true
    s.current.moved = false
    s.current.startX = e.clientX
    s.current.startOffset = s.current.x
  }
  const onPointerMove = (e) => {
    if (!s.current.dragging) return
    const dx = e.clientX - s.current.startX

    if (!s.current.moved && Math.abs(dx) > DRAG_THRESHOLD) {
      s.current.moved = true
      e.currentTarget.setPointerCapture(e.pointerId)
    }
    if (s.current.moved) s.current.x = s.current.startOffset + dx
  }
  const onPointerUp = () => {
    s.current.dragging = false
  }

  return (
    <div
      className={`w-[98%] max-w-[1900px] mx-auto overflow-hidden select-none mb-10 mt-3
        cursor-grab active:cursor-grabbing touch-pan-y mask-x-from-97% mask-x-to-98% ${className}`}
      onPointerEnter={() => (s.current.hovered = true)}
      onPointerLeave={() => (s.current.hovered = false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div ref={trackRef} className="flex gap-5 will-change-transform h-full items-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            ref={copy === 0 ? firstListRef : null}
            className="min-w-full flex shrink-0 justify-between items-center gap-5"
          >
            {items.map((item) => (
              <li
                key={`${copy}-${item.id}`}
                className="group relative w-40 h-60 lg:w-50 lg:h-75 shrink-0 rounded-[9px] overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-cover duration-500"
                />

                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0
                  group-hover:opacity-100 transition-opacity duration-500 p-2
                  flex flex-col justify-between">

                  <div className="flex justify-between text-white px-1 text-[18px]">
                    <p className="flex items-center gap-2">
                      <FaLanguage />{item.original_language?.toUpperCase()}
                    </p>
                    <p className="flex items-center gap-2">
                      <PiStarFill />{item.vote_average?.toFixed(1)}
                    </p>
                  </div>

                  <h1 className="text-neutral-300 text-[18px] text-center line-clamp-3">
                    {item.title}
                  </h1>

                  <div className="flex justify-between items-center text-white">
                    <p className="flex items-center gap-2 text-[14px]">
                      <MdDateRange />{item.year}
                    </p>
                    <button
                      className="bg-neutral-900 py-2 px-3 text-[14px] rounded-[5px] cursor-pointer
                        hover:bg-neutral-800 transition-all"
                      onClick={() => !s.current.moved && goToDetails(item)}
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}