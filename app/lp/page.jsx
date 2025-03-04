import React from 'react'
import Nav from './Navbar'
import Hero from './Hero'
import Ghostwriting from './Ghostwriting'
import Draft from './Draft'
import Portfolio from '../Components/Portfolio'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Ghostwriting/>
        <Draft/>
        <Portfolio/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default page