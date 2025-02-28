import React from 'react'
import Nav from './Navbar'
import Hero from './Hero'
import Ghostwriting from './Ghostwriting'
import Draft from './Draft'

const page = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Ghostwriting/>
        <Draft/>
    </div>
  )
}

export default page