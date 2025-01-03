import Nav from "./Components/Nav";
import Hero from './Components/Hero'
import GhostwritingServices from './Components/GhostwritingServices'
import WhyChooseUs from './Components/WhyChooseUs'
import ContactBanner from './Components/ContactBanner'
import VideoTestimonials from './Components/VideoTestimonials'
import Testimonials from './Components/Testimonials'
import Footer from "./Components/Footer";

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
      <Footer/>
    </main>
  )
}
