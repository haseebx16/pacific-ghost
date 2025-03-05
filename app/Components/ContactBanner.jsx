"use client";

import Link from 'next/link'
import { useState } from 'react'
import ContactModal from './ContactModal';

const ContactBanner = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-sky-50">
    <section 
      style={{ backgroundImage: "url('/call-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    className="bgg  mt-6 mb-2 w-[95%] flex flex-col justify-center items-center py-4 relative mx-auto">
      <div className="w-[80%] mx-auto max-w-7xl">
        <div className="text-white flex flex-col justify-start items-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Hit The Digits And Contact Us!</h2>
          <p className="text-gray-300 mb-6 md:text-xl text-lg">Have An Idea? Talk To Us, Get on Board, and Let's Connect</p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-block text-white bg-sky-600 px-6 py-2 rounded-full hover:text-black hover:bg-sky-100 duration-300 text-lg"
          >
            Consult Now »
          </button>
        </div>
      </div>
    </section>
    <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default ContactBanner
