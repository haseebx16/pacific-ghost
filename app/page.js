import Nav from "./Components/Nav";
import Hero from './Components/Hero'
import GhostwritingServices from './Components/GhostwritingServices'
import WhyChooseUs from './Components/WhyChooseUs'

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero />
      <GhostwritingServices />
      <WhyChooseUs />
    </main>
  )
}
