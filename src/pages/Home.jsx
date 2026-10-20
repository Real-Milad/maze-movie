import { Hero } from "../components/home/Hero"
import { InfinitSlider } from "../components/home/InfinitSlider"
import { HeroSmallScreen } from "../components/home/HeroSmallScreen"
import { InputSearch } from "../components/shared/InputSearch"


export const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSmallScreen />
      <InputSearch />
      <InfinitSlider />
    </div>
  )
}
