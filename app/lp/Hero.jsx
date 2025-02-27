"use client";

import Image from 'next/image'
import { useState } from 'react'
import ContactModal from '../Components/ContactModal';

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
          <p className=" text-7xl max-w-7xl text-center font-extrabold text-white mb-2">Get Your Book Successfully
          Published Today!</p>
          <p className="text-3xl max-w-2xl mt-4 text-center text-white mb-6">
          Avail the services of expert ghostwriters at 65% OFF and become
          a published author today!
          </p>
          <div>
            <div className='flex flex-row space-x-4'>

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
              Activate Your Coupon
            </button>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default Hero
