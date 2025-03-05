"use client";

import Link from 'next/link'
import { useState } from 'react'
import ContactModal from './ContactModal';

const AboutMain = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-sky-50">
    <section 
      style={{ backgroundImage: "url('/about-main.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    className="bgg  w-[100%] flex flex-col justify-center items-center py-4 relative mx-auto">
      <div className="w-[100%] mx-auto max-w-7xl">
        <div className="text-white flex p-8 flex-col justify-start items-start">
          <h2 className="text-3xl md:text-3xl font-semibold mb-2">Our Achievements</h2>
          <p className="text-gray-300 mb-6 md:text-md text-lg">We are proud to have a massive cluster of Pacific Ghostwritings who not only delivered to their words but proved to be competent and peerless in this competitive era. With their relentless efforts and innovative contents, we have satisfied our clients from a wide range of professional backgrounds. The journey has not been an easy one. However, we have eliminated every uncertainty and exceled to the highest level. Our clients are the first and foremost asset for us, therefore we deliver each content within the framework designed by them, fulfilling all their requirements.</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutMain
