import { Hero } from "../components/home/Hero"
import { HeroSmallScreen } from "../components/home/HeroSmallScreen"
import { HomeFilter } from "../components/shared/HomeFilter"
import { MediaRow } from "../components/shared/MediaRow"


export const Home = () => {
  

  return (
    <div>
      <Hero />
      <HeroSmallScreen />
      <HomeFilter />
      <MediaRow title="Latest Movies"    category="movie"     mode="latest"  direction="rtl" />
      <MediaRow title="Popular Series"   category="series"    mode="popular" direction="ltr" />
      <MediaRow title="Popular Animation" category="animation" mode="popular" direction="rtl" />
      <MediaRow title="Latest Anime"     category="anime"     mode="latest"  direction="ltr" />
    </div>
  )
}
