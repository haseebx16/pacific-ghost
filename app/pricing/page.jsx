"use client";

import Footer from '@/app/Components/Footer';
import Nav from '@/app/Components/Nav';
import React, { useState } from 'react';
import { Font } from '../Components/font/font';

const page = () => {
  // State to track selected service
  const [selectedService, setSelectedService] = useState('GHOSTWRITING');

  // Data for services
  const services = {
    GHOSTWRITING: {
      title: 'Ghostwriting Service',
      description:
        'Our podium of professional ghostwriting services offers you an array of experienced ghostwriters, editors, and publishing experts to transform your idea into a commendable book.',
      plans: [
        {
          type: 'Standard',
          details: [
            'The chief ghostwriter will be a published author.',
            'Procedure includes a detailed strategy building and implementing session.',
            'The team will provide editing and consultation throughout the process.',
          ],
        },
        {
          type: 'Premium',
          details: [
            'The chief ghostwriter will be a bestseller or extensively published author.',
            'Procedure includes detailed strategy sessions and consultation.',
            'The team will provide recommendations throughout the process.',
          ],
        },
      ],
    },
    'ONLINE BOOK PUBLICATION': {
      title: 'Online Book Publication',
      description:
        'We assist authors in publishing their books online across all major platforms, ensuring a seamless process from manuscript to publication.',
      plans: [
        {
          type: 'Standard Plan',
          details: [
            'Basic formatting and layout services.',
            'Publishing on a Standard platform (e.g., Amazon).',
            'Includes a consultation session to prepare your manuscript.',
          ],
        },
      ],
    },
    'BRANDING AND MARKETING': {
      title: 'Branding and Publicity',
      description:
        'Elevate your book’s visibility with our targeted branding and publicity services.',
      plans: [
        {
          type: 'Standard',
          details: [
            'Social media campaign setup and management.',
            'Basic press release distribution.',
          ],
        },
        {
          type: 'Premium',
          details: [
            'Comprehensive branding strategy.',
            'Advanced social media campaigns and influencer outreach.',
            'Premium press release distribution to top media outlets.',
          ],
        },
      ],
    },
    'VIDEO BOOK TRAILERS': {
      title: 'Video Book Trailers',
      description:
        'Engage your audience with a captivating video book trailer that brings your story to life.',
      plans: [
        {
          type: 'Standard Plan',
          details: [
            'Custom video trailer (up to 2 minutes).',
            'Includes scriptwriting and professional voiceover.',
            'Delivered in HD format, ready for sharing.',
          ],
        },
      ],
    },
    'WEB DESIGN AND SEO': {
      title: 'Web Design and SEO',
      description:
        'Build a stunning author website with optimized SEO to showcase your work and attract readers.',
      plans: [
        {
          type: 'Standard',
          details: [
            'Responsive author website design.',
            'Basic on-page SEO setup.',
            'Includes a blog section and contact form.',
          ],
        },
        {
          type: 'Premium',
          details: [
            'Custom-designed author website with advanced features.',
            'Comprehensive SEO optimization.',
            'Includes e-commerce integration for book sales.',
          ],
        },
      ],
    },
    'AUDIO BOOKS': {
      title: 'Audio Books',
      description:
        'Transform your book into an immersive audio experience with our professional audiobook services.',
      plans: [
        {
          type: 'Standard',
          details: [
            'Narration by a professional voice artist.',
            'Basic audio editing and mastering.',
            'Delivered in MP3 format, ready for publishing.',
          ],
        },
        {
          type: 'Premium',
          details: [
            'Narration by a celebrity or well-known voice artist.',
            'Advanced audio editing, mastering, and sound effects.',
            'Delivered in multiple formats with distribution support.',
          ],
        },
      ],
    },
    'COVER DESIGN AND TYPESETTING': {
      title: 'Cover Design and Typesetting',
      description:
        'Make a lasting impression with a professionally designed book cover and high-quality typesetting.',
      plans: [
        {
          type: 'Standard Plan',
          details: [
            'Custom cover design tailored to your genre.',
            'Interior typesetting for both print and e-book formats.',
            'Unlimited revisions to ensure perfection.',
          ],
        },
      ],
    },
  };

  return (
    <div className={`${Font.className}`}>
      <Nav />
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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Pricing Plans We Offer</h1>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container bg-sky-50 mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-sky-900 p-4 rounded-lg shadow-md col-span-1">
            <ul className="space-y-4">
              {Object.keys(services).map((service) => (
                <li
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer text-sm font-semibold border-b border-gray-300 pb-2 ${
                    selectedService === service ? 'text-white' : 'text-gray-300'
                  } hover:text-white`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Content Section */}
          <div className="col-span-3">
            <h3 className="text-2xl font-bold mb-4">{services[selectedService].title}</h3>
            <p className="text-gray-600 mb-6">{services[selectedService].description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {services[selectedService].plans.map((plan, index) => (
                <div key={index} className="border p-6 bg-sky-900 rounded-lg shadow-md">
                  <h4 className="text-xl text-white font-bold mb-4">{plan.type}</h4>
                  <ul className="space-y-2 text-gray-100">
                    {plan.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <a href='/contact'><button className="mt-4 bg-sky-500 text-white px-6 py-2 rounded hover:bg-gray-800">
                    Request a Quote
                  </button></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
