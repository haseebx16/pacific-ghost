import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'
import Nav from '@/app/Components/Nav'
import Testimonials from '@/app/Components/Testimonials'
import VideoTestimonials from '@/app/Components/VideoTestimonials'
import React from 'react'

const page = () => {
  return (
    <>
        <Nav/>
        <div className="relative">
        {/* Background Image */}
        <img
          src="/About-01.jpg"
          alt="About Background"
          className="w-full z-1 h-[400px] object-cover"
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Heading Overlay */}
        <div className="absolute inset-0 flex items-center md:justify-start justify-center md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Shipping/Delivery Policy</h1>
        </div>
      </div>
      <div className="pt-12 w-[70%] pb-12 mx-auto md:mx-4">
        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Introduction:

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        At Coastal Ghostwriting, we value your time and prioritize the timely, efficient delivery of our services. Our Delivery & Shipping Policy ensures you receive your digital or physical deliverables with complete clarity and accountability.
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Service Delivery
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        All services are delivered digitally or on-site, as agreed. Timelines are communicated upfront, and we strive to meet or exceed your expectations.
        </p>
        
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Digital Deliverables
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Digital products are sent via secure channels. Please ensure your contact details are accurate to avoid delays.
        </p>
        

        <h1 className="text-3xl md:text-4xl mt-12">Physical Deliverables
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        For physical items, shipping methods and costs are agreed upon in advance. We are not liable for carrier delays.
        </p>
        

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">International Clients
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        International shipping may incur additional fees and extended delivery times. Customs duties and taxes are the client's responsibility.
        </p>
        

        </div>
    
      <Footer/>
    </>
  )
}

export default page