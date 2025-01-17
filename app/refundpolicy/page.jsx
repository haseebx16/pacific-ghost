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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Return/Refund Policy</h1>
        </div>
      </div>
      <div className="pt-12 w-[70%] pb-12 px-12 mx-auto md:mx-4">
        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Introduction:
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        At Coastal Ghostwriting, we stand behind our work. Our Return & Refund Policy reflects our dedication to your satisfaction while maintaining fairness and professionalism. We aim to address concerns promptly and transparently.
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Non-Refundable Fees
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Consultation fees and deposits are non-refundable, reflecting the time and resources invested in understanding and initiating your project.
        </p>
        
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Refund Requests

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Refunds are considered on a case-by-case basis. Requests must be submitted in writing, detailing the reasons for the refund.
        </p>
        

        <h1 className="text-3xl md:text-4xl mt-12">Evaluation Process

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Each refund request is carefully reviewed by our management team. Decisions will be communicated promptly.
        </p>
        

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Deductions
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Approved refunds may have deductions for incurred costs, ensuring fairness for both parties.
            </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Force Majeure        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Refunds cannot be issued for delays caused by unforeseen circumstances, such as natural disasters or government restrictions.
        </p>
        

        </div>
    
      <Footer/>
    </>
  )
}

export default page