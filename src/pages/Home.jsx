import { Hero } from "../components/home/Hero"
import { InfinitSlider } from "../components/home/InfinitSlider"
import { HeroSmallScreen } from "../components/home/HeroSmallScreen"
import { HomeFilter } from "../components/shared/HomeFilter"


export const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSmallScreen />
      <HomeFilter />
      <InfinitSlider />
    </div>
  )
}
