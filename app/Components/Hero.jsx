"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ContactModal from './ContactModal';
import { Font } from './font/font';

const Hero = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={`${Font.className} relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden bg-sky-50`}>
      <div className="absolute top-0 right-0 w-1/2 h-full md:block hidden">
        <Image
          src="/hero-man.jpg"
          alt="Professional ghostwriter"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto mt-28 px-4 h-full">
        <div className="flex flex-col justify-center h-full max-w-xl py-12 md:py-12 py-8">
          <p className="text-gray-600 text-lg mb-2">Coastal Ghostwriting Services</p>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Putting Powerful Words Together and Sharing to the World
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Are You Looking for Verified Ghostwriters and Editors?
          </p>
          <div>
          <button
              onClick={() => setModalOpen(true)}
              className="inline-block bg-transparent hover:bg-black text-black hover:text-white border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200"
            >
              Consult Now
            </button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default Hero
