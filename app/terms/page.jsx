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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Terms And Conditions</h1>
        </div>
      </div>
      <div className="pt-12 w-[70%] pb-12 px-12 mx-auto md:mx-4">
        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Introduction: A Partnership Built on Trust and Transparency
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        At Coastal Ghostwriting, we believe that clear communication and mutual understanding form the foundation of successful partnerships. Our Terms & Conditions outline the commitments we make to you and the responsibilities we ask of you. By engaging with our services, you join us in creating solutions that drive success.
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Acceptance of Terms
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        By using the services of Coastal Ghostwriting, you agree to these Terms & Conditions. If you do not accept any part of these terms, please refrain from using our services.
        </p>
        
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Services Provided
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We offer professional, scientific, and technical services tailored to meet your unique needs. All services are delivered with precision and integrity, ensuring your satisfaction.
        </p>
        

        <h1 className="text-3xl md:text-4xl mt-12">Limitation of Liability
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        While we strive for excellence, 786 Services LLC is not liable for indirect or consequential damages. Our liability is limited to the fees paid for the specific service.
        </p>
        

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Client Responsibilities        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Your active participation is essential for project success. We ask clients to provide accurate information, timely feedback, and adherence to agreed-upon timelines.  
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Intellectual Property        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        All materials created by Coastal Ghostwriting remain our intellectual property unless otherwise agreed in writing. We license these materials for your specified use.
        </p>
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Confidentiality
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We respect the confidentiality of your sensitive information and expect the same from you. Trust and privacy are paramount to our partnership.
        </p>
        <h1 className="text-3xl md:text-4xl mt-12">Payment Terms        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Clients agree to the payment terms outlined in our service agreement. Timely payments ensure uninterrupted progress and service delivery.
        </p>
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Governing Law
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        These terms are governed by the laws of the USA. Any disputes will be addressed in the courts of this jurisdiction.
</p>
        <h1 className="text-3xl md:text-4xl mt-12">Amendments

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We may update these terms to reflect changing business practices. Clients will be informed of significant changes.
      </p>
        

        </div>
    
      <Footer/>
    </>
  )
}

export default page