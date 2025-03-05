import React from 'react';
import Nav from '../Components/Nav';
import GhostwritingServices from '../Components/GhostwritingServices';
import WhyChooseUs from '../Components/WhyChooseUs';
import ContactBanner from '../Components/ContactBanner';
import Testimonials from '../Components/Testimonials';
import VideoTestimonials from '../Components/VideoTestimonials';
import Footer from '../Components/Footer';

const Page = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        
        <img
          src="/About-01.jpg"
          alt="About Background"
          className="w-full z-1 h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center md:justify-start justify-center md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>
      <GhostwritingServices/>
      <WhyChooseUs/>
      <ContactBanner/>
      <Testimonials/>
      
      <Footer/>
    </>
  );
};

export default Page;
