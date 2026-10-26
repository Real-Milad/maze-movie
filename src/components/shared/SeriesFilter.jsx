import { Form, useNavigate, useSearchParams } from "react-router"


export const SeriesFilter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <Form method="get" action="/series" className="grid grid-cols-2 gap-2">
      <select name="genres" defaultValue={searchParams.get("genres") ?? ""} className="filterSelect">
        <option value="">Genres</option>
        <option value="10759">Action/Adventure‏</option>
        <option value="16">Animation‏</option>
        <option value="35">Comedy‏</option>
        <option value="18">Drama‏</option>
        <option value="80">Crime</option>
        <option value="9648">Mystery</option>
        <option value="10765">‏Science Fiction‏</option>
      </select>

      <select name="sort" defaultValue={searchParams.get("sort")} className="filterSelect">
        <option value="popularity.desc">‏Most Popular‏</option>
        <option value="first_air_date.desc">Newest‏</option>
        <option value="vote_average.desc">‏Top Rated‏</option>
      </select>

      <select name="year" defaultValue={searchParams.get("year") ?? ""} className="filterSelect">
        <option value="">Year</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>

      <select name="rating" defaultValue={searchParams.get("rating") ?? ""} className="filterSelect">
        <option value="">Rating</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
      </select>

      
      <button type="submit" className="col-span-2 w-full bg-neutral-600 mt-2 py-2 rounded-[5px] text-white hover:bg-neutral-800 duration-400" onClick={() => navigate("/series")}>Filter</button>
      
    </Form>
  )
}
