import { useEffect, useState } from "react";

function useTheme() {
  // lazy initializer: only runs once, before first paint
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}


function Star({ className = "", size = 8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`absolute fill-white ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0l2.9 8.1L24 12l-9.1 3.9L12 24l-2.9-8.1L0 12l9.1-3.9z" />
    </svg>
  );
}


function Cloud({ className = "" }) {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <div className="absolute bottom-0 left-0 h-5 w-12 rounded-full bg-white/80" />
      <div className="absolute bottom-2 left-2 h-6 w-6 rounded-full bg-white/80" />
      <div className="absolute bottom-2 left-6 h-7 w-7 rounded-full bg-white/80" />
    </div>
  );
}




export const ThemeToggle = ({ scale = 1 }) => {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";

  return (
    <div style={{ width: 144 * scale, height: 72 * scale }}>
    <button
      type="button"
      style={{ transform: `scale(${scale})` }}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-18 w-36 origin-top-left shrink-0 cursor-pointer overflow-hidden rounded-full
                 border-2 border-white/70 shadow-[0_6px_14px_rgba(0,0,0,.15)] outline-none
                 focus-visible:ring-4 focus-visible:ring-indigo-400/60"
    >
      {/* Day background */}
      <div
        className={`absolute inset-0 bg-linear-to-b from-indigo-500 via-indigo-200 to-yellow-200
                    transition-opacity duration-700 motion-reduce:transition-none
                    ${isDark ? "opacity-0" : "opacity-100"}`}
      />
      {/* Night background */}
      <div
        className={`absolute inset-0 bg-linear-to-b from-slate-900 to-indigo-900
                    transition-opacity duration-700 motion-reduce:transition-none
                    ${isDark ? "opacity-100" : "opacity-0"}`}
      />

      {/* Clouds (visible in day, on the right) */}
      <div
        className={`absolute inset-0 transition-all duration-700 motion-reduce:transition-none
                    ${isDark ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <Cloud className="right-14 top-3 scale-75" />
        <Cloud className="right-2 top-6" />
      </div>

      {/* Stars (visible in night, on the left) */}
      <div
        className={`absolute inset-0 transition-all duration-700 motion-reduce:transition-none
                    ${isDark ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
      >
        <Star className="left-4 top-4" size={8} />
        <Star className="left-9 top-9" size={6} />
        <Star className="left-14 top-3" size={10} />
        <Star className="left-5 bottom-3" size={7} />
        <Star className="left-12 bottom-4" size={6} />
        <Star className="left-20 top-7" size={5} />
      </div>

      {/* Inner shadow: makes the track look carved into the surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full
                   shadow-[inset_0_7px_12px_rgba(0,0,0,.35),inset_0_-3px_6px_rgba(255,255,255,.25)]"
      />

      {/* Knob + halo rings */}
      <div
        className={`absolute inset-y-0 left-2 my-auto h-14 w-14 transition-transform duration-700
                    ease-[cubic-bezier(.68,-.2,.27,1.2)] motion-reduce:transition-none
                    ${isDark ? "translate-x-17" : "translate-x-0"}`}
      >
        {/* rings */}
        <span className="absolute -inset-3 rounded-full bg-white/10" />
        <span className="absolute -inset-6 rounded-full bg-white/10" />
        <span className="absolute -inset-9 rounded-full bg-white/5" />

        {/* sun */}
        <span
          className={`absolute inset-0 rounded-full bg-yellow-300 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,.15),inset_3px_3px_6px_rgba(255,255,255,.5),0_5px_10px_rgba(0,0,0,.35),0_0_18px_rgba(253,224,71,.8)]
                      transition-all duration-700 motion-reduce:transition-none
                      ${isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        />

        {/* moon */}
        <span
          className={`absolute inset-0 rounded-full bg-slate-200 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,.2),inset_3px_3px_6px_rgba(255,255,255,.6),0_5px_10px_rgba(0,0,0,.45)]
                      transition-all duration-700 motion-reduce:transition-none
                      ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
        >
          <span className="absolute right-2 top-2 h-4 w-4 rounded-full bg-indigo-300/70" />
          <span className="absolute bottom-2.5 left-3 h-3.5 w-3.5 rounded-full bg-indigo-300/70" />
          <span className="absolute left-2 top-4 h-2 w-2 rounded-full bg-indigo-300/70" />
        </span>
      </div>
    </button>
    </div>
  );
}
