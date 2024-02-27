import AvailableCatsSection from "./components/AvailableCatsSection/AvailableCatsSection"
import HeroSection from "./components/HeroSection/HeroSection"

const HomePage = () => {
  return (
    <main className="main-home-page">
      <HeroSection />
      <AvailableCatsSection />
    </main>
  )
}

export default HomePage