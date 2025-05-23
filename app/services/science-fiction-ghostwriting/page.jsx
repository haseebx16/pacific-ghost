import ContactBanner from '@/app/Components/ContactBanner'
import DiscountForm from '@/app/Components/DiscountForm'
import { Font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Nav from '@/app/Components/Nav'
import Testimonials from '@/app/Components/Testimonials'
import VideoTestimonials from '@/app/Components/VideoTestimonials'
import React from 'react'

const page = () => {
  return (
    <div className={`${Font.className}`}>
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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Meet The Best Science Fiction Ghostwriters At Coastal Ghostwriting</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 gap-8">
      <div className="md:w-[65%] w-full space-y-8">
        <p className="text-gray-500 text-justify text-sm">
        If you have an incredible science fiction story in mind but lack the writing skills to bring it to life, worry not. Coastal Ghostwriting is here to rescue you. We have a team of professional science fiction ghostwriters who can transform your imagination into reality.<br/>

Science fiction is a fantastic genre, probably the most widespread form of speculative fiction. It’s all about imagining what could happen in the future as science keeps advancing. It’s exciting because it lets us explore endless ideas, talk about important topics in a fun way, and imagine things we’ve never seen before. however, it asks some talent to make it happen.<br/>

Do you have a story burning inside you that you’re dying to share with the world? Need a professional to bring your sci-fi vision to life? Coastal Ghostwriting has you covered. We expertly know how to create captivating sci-fi stories that leave readers hungry for more.<br/>

Join us, and let us transform your ideas into unforgettable stories.
        </p>
        



        {/* Section 1 */}
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">Surprise Your Readers With Our Premium Science Fiction Writing Services</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Every fiction author wants their audience to be fully involved in the book while reading. And that’s only possible when you collaborate with the right sci-fi writing services, such as the Coastal Ghostwriting.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        We have the most talented team of ghostwriters who create compelling science fiction narratives and engage the audiences. Filled with surprises, twists, and complex characters, our fiction stories are designed to be engaging for readers everywhere.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Our high-quality science fiction writing services will keep readers hungry for more. As well as, you leave a lasting mark on the world of science fiction literature.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Whether you’re a new writer with a brilliant idea or an experienced author wanting to explore new creative paths, Coastal Ghostwriting is here to offer unmatched support and expertise at every stage of your journey.
        </p>
        
        <h1 className="text-3xl md:text-4xl mt-12">Create Insanely Amazing Science Fiction Books With Us</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        With Coastal Ghostwriting, you can create an amazing science fiction book. Our professional writers are awarded for creating imaginative tales with multidimensional characters and exciting twists in the story. Even if you imagine futuristic tech or going on thrilling space adventures, we can easily bring your sci-fi vision to life.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        With expert storytelling and careful attention to detail, we enrich your narrative to deeply connect with readers. Allow us to take your autobiography to the next level, capturing the spirit of your experiences and leaving a lasting impact on your audience.
        </p>
        
        <h1 className="text-3xl md:text-4xl text-sky-500 mt-12">We are The Best Sci-fi Writers For Hire In the Industry
        </h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Coastal Ghostwriting is proud to offer the finest science fiction ghostwriters for hire in the industry. With a team of exceptional talents, we are capable of creating captivating narratives that push the boundaries of imagination.
        </p>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        At Coastal Ghostwriting, our professional writers are experts in creating immersive worlds and compelling characters that readers love. From exploring distant galaxies to imagining advanced technologies, we have a deep passion for the sci-fi genre. This allows us to bring our client’s visions to life in a captivating and inspiring way.
        </p>
        <h1 className="text-3xl md:text-4xl mt-12">Contact Us Today To Get Your Ghostwriting Project Started!</h1>
        <p className="text-gray-500 text-justify mt-2 text-sm">
        Come to us today, and let’s begin your ghostwriting project! Whether it’s a sci-fi escapade or any other genre, our team is ready to bring your vision to life with skill and imagination.
         text-justify</p>
         </div>
         <div className="md:w-[35%] w-full flex justify-center">
          <div className="w-full md:w-auto max-h-[500px] overflow-y-auto">
            <DiscountForm isOpen={true} />
          </div>
        </div>

        </div>
      <ContactBanner/>
      <Testimonials/>
      
      <Footer/>
    </div>
  )
}

export default page