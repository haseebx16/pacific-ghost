import React from 'react'
import Nav from './Navbar'
import Hero from './Hero'
import Ghostwriting from './Ghostwriting'
import Draft from './Draft'
import Portfolio from '../Components/Portfolio'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Services from './Services'

const page = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Ghostwriting/>
        <Draft/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default page