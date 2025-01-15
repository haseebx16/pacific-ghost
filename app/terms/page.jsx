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
      <div className="pt-12 w-[70%] pb-12 mx-auto md:mx-4">
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
        

        <h1 className="text-3xl md:text-4xl mt-12">Content Editing        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Our professional book editing services also include content editing. It involves an accurate evaluation of substances, accuracy, and relevance in your book. Our editors conduct fact-checking, assess the depth of coverage, and edit content to suit your target audience’s needs and interests.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Sensitivity and inclusivity considerations also make sure that the content aligns with diverse perspectives and develops a respectful environment for all readers.
        </p>

        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Client Responsibilities        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Your active participation is essential for project success. We ask clients to provide accurate information, timely feedback, and adherence to agreed-upon timelines.  
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Intellectual Property        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        All materials created by Coastal Ghostwriting remain our intellectual property unless otherwise agreed in writing. We license these materials for your specified use.
        </p>
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Evaluation Editing        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        It involves a very critical analysis of the quality, effectiveness, and impact of your book on the readers. In this editing type, our editors assess the coherence of arguments, anticipate readers’ responses, and then provide you with constructive feedback and recommendations for improvement grounded in objectivity and evidence.
        </p>
        <h1 className="text-3xl md:text-4xl mt-12">Mechanical Editing        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Mechanical editing also goes by the name copy editing. Here our editors focus on correcting mechanical errors or inconsistencies in grammar, punctuation, spelling, and formatting. The team at Coastal Ghostwriting makes sure to adhere to the language conventions and publishing standards to maintain clarity and precision throughout the manuscript.
        </p>
        <p className="text-gray-500 text-justify italic mt-2 text-sm">
        Our editorial process encompasses a series of interrelated stages and each serves a distinct purpose to refine and enhance your written work. Whether it is substantive editing or mechanical, every type of editing contributes to the creation of a polished, coherent, and impactful manuscript that communicates with the audience more effectively.
        </p>
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Book Editors For Hire At Coastal Ghostwriting        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Our affordable book editors provide proficiency and apply their skills using the best tools to alter your manuscript. Coastal Ghostwriting is one of the book editing services that hold the reputation for being the finest in the industry. From expert editors to having a range of tools to elevate your book, it has everything to provide you with the best. We take pride as a book editing agency and maintain client satisfaction by offering affordable book editing services.

</p>
        

        </div>
    
      <Footer/>
    </>
  )
}

export default page