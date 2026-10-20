import { Form, useSearchParams } from "react-router"



export const MoviesFilter = () => {

  const [searchParams] = useSearchParams();

  return (
    <Form method="get">

      <select name="genres" defaultValue={searchParams.get("genres") ?? ""}>
        <option value="">Genres</option>
        <option value="28">Action</option>
        <option value="12">Adventure‏</option>
        <option value="16">Animation‏</option>
        <option value="35">Comedy‏</option>
        <option value="18">Drama‏</option>
        <option value="36">History‏</option>
        <option value="27">Horror‏</option>
        <option value="878">‏Science Fiction‏</option>
      </select>

      <select name="sort" defaultValue={searchParams.get("sort")}>
        <option value="popularity.desc">‏Most Popular‏</option>
        <option value="primary_release_date.desc">Newest‏</option>
        <option value="vote_average.desc">‏Top Rated‏</option>
      </select>

      <select name="year" defaultValue={searchParams.get("year") ?? ""}>
        <option value="">Year</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>

      <select name="rating" defaultValue={searchParams.get("rating") ?? ""}>
        <option value="">Rating</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
      </select>

      <button type="submit">Filter</button>
    </Form>
  )
}