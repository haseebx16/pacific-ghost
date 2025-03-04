"use client";

import React, { useState } from 'react';
import ContactModal from '../Components/ContactModal';
import Contact from './Contact';


const Ghostwriting = () => {
      const [isModalOpen, setModalOpen] = useState(false);
    
  return (
    <section className={` bg-gray-100 h-screen md:h-[35rem] relative`}>
        <div className="absolute top-0 left-0 mt-8 h-72 w-2 bg-yellow-400 md:block hidden" />
      <div className='md:flex'>
        <div className='md:w-1/2 pt-8 md:pl-8 pl-4'>
          <h1 data-aos="fade-right" className='md:text-5xl text-3xl font-bold relative'>
            
            <span className='relative text-black z-10'>
            Exclusive Ghostwriting, Editing, Proofreading, and Publishing Services.
            </span>
          </h1>
          <p data-aos="fade-left" className={` text-gray-500 md:text-xl md:mt-4`}>At Coastal Ghostwriting , we offer a wide variety of services to help you become a successfully published bestselling author in the literary sphere. We have a team of professional ghostwriters who take their job very seriously and are versatile enough to write on any kind of book genre. Our team of writers is backed by our talented quality assurance team consisting of editors and proofreaders who make sure that no stone is left unturned in terms of quality. From writing your book and editing and proofreading it, we’ll also ensure that your book is successfully published and marketed to jumpstart your career as a bestselling writer.</p>
            <div className='mt-4 space-x-4'>
                <button
                onClick={() => setModalOpen(true)}
                className="inline-block bg-yellow-400 hover:bg-white text-black hover:text-black border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200"
                >
                Activate Your Coupon
                </button>
                <button
                onClick={() => setModalOpen(true)}
                className="inline-block bg-black hover:bg-white text-white hover:text-black border-2 border-black px-6 py-2 text-base font-medium transition-colors duration-200"
                >
                Chat With Us
                </button>
            </div>

        </div>
        <div data-aos="zoom-in-up" className='md:w-1/2 flex items-center justify-center'>
            <img src='/popup-img.png' className='mt-10 h-96 w-auto'/>
        
      </div>
      </div>
      <Contact isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Ghostwriting;