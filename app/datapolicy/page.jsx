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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Consumer Data Policy</h1>
        </div>
      </div>
      <div className="pt-12 w-[70%] pb-12 mx-auto md:mx-4">
        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Introduction: Your Privacy, Our Commitment

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Coastal Ghostwriting takes your privacy seriously. We are dedicated to protecting your personal data and using it responsibly. Our Consumer Data Policy ensures transparency and fosters trust, so you can engage with our services confidently.
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Data Collection

        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We collect only the information necessary to deliver our services, such as your name, contact details, and project-related information.
        </p>
        
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Data Usage
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Your data is used exclusively to provide services, communicate updates, and enhance your experience. We do not share your information without your consent.
        </p>
        

        <h1 className="text-3xl md:text-4xl mt-12">Data Security
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Our systems are protected with industry-standard security measures. Regular audits ensure your information is safeguarded against unauthorized access.
        </p>
        

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Your Rights
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        You have the right to access, update, or request deletion of your data. Contact us to exercise your rights or address any concerns.
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Transparency        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We believe in open communication. Updates to this policy will be shared promptly, and we encourage you to review them periodically.
        </p>
        

        </div>
    
      <Footer/>
    </>
  )
}

export default page