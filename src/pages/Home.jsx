import { Hero } from "../components/home/Hero"
import { InfinitSlider } from "../components/home/InfinitSlider"
import { HeroSmallScreen } from "../components/home/HeroSmallScreen"
import { Search } from "../components/shared/Search"


export const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSmallScreen />
      <Search />
      <InfinitSlider />
    </div>
  )
}
