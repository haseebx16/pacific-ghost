import Nav from "./Components/Nav";
import Hero from './Components/Hero'
import GhostwritingServices from './Components/GhostwritingServices'
import WhyChooseUs from './Components/WhyChooseUs'
import ContactBanner from './Components/ContactBanner'
import VideoTestimonials from './Components/VideoTestimonials'
import Testimonials from './Components/Testimonials'

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero />
      <GhostwritingServices />
      <WhyChooseUs />
      <ContactBanner />
      <Testimonials />
      <VideoTestimonials />
    </main>
  )
}
