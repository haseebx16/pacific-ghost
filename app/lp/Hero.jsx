"use client";

import Image from 'next/image'
import { useState } from 'react'
import ContactModal from '../Components/ContactModal';
import Contact from './Contact';

const Hero = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-[400px] md:min-h-[52rem] w-full overflow-hidden bg-sky-50">
      <div className="absolute top-0 right-0 w-full h-full md:block hidden">
        <Image
          src="/banner.jpg"
          alt="Professional ghostwriter"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative w-full mx-auto px-4 h-full">
        <div className="flex flex-col justify-center items-center h-full w-full py-12 md:py-48 ">
          <p className=" text-5xl max-w-7xl text-center font-extrabold text-white">Get Your Book Successfully
          </p>
          <p className='bg-red-600/80 mt-2 px-4 text-7xl max-w-7xl text-center rounded-md font-extrabold text-white'>Published Today!</p>
          <p className="text-3xl max-w-2xl mt-4 text-center text-white mb-6">
          Avail the services of expert ghostwriters at <span className='text-yellow-400'>65% OFF</span> and become
          a published author today!
          </p>
          <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center space-x-4 items-center'>
                      <p className='text-white text-xl'><span className='text-green-400'>&#x2713;&nbsp;</span>&nbsp;Trusted By 400+ Authors Globally</p>
                      <p className='text-white text-xl'><span className='text-green-400'>&#x2713;&nbsp;</span>&nbsp;2.5k+ Writers And Editors</p>
                </div>
                <div className='flex justify-center mt-4 space-x-4 items-center'>
                      <p className='text-white text-xl'><span className='text-green-400'>&#x2713;&nbsp;</span>&nbsp;86% Of Customers Rehire</p>
                      <p className='text-white text-xl'><span className='text-green-400'>&#x2713;&nbsp;</span>&nbsp;100% Satisfaction Guaranteed</p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center mt-8 space-x-4'>

          <button
              onClick={() => setModalOpen(true)}
              className="inline-block bg-yellow-400 hover:bg-white text-black hover:text-black border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200"
            >
              Activate Your Coupon
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-block bg-transparent hover:bg-white text-white hover:text-black border-2 border-white px-6 py-2 text-base font-medium transition-colors duration-200"
            >
              Live Chat
            </button>
            </div>
            <div className='flex justify-center space-x-4 items-center mt-4'>
              <img src='/star.png'/>
              <p className='text-white mt-1 text-xl'>99% Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <Contact isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default Hero
