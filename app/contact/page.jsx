'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from '@/app/Components/Nav';
import Footer from '@/app/Components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, comments } = formData;

    if (!name || !email || !phone) {
      setError('All fields marked with * are required.');
      return;
    }

    emailjs
      .send(
        'service_vcvqcan', 
        'template_4ela61n',
        {
          to_email: 'support@coastalghostwriting.com',
          from_name: name,
          from_email: email,
          phone,
          message: comments,
        },
        'TihDoLxcsdR_sDnwT'
      )
      .then(() => {
        setIsSubmitted(true);
        setError('');
        setFormData({ name: '', email: '', phone: '', comments: '' });
      })
      .catch((err) => {
        setError('Failed to send your message. Please try again later.');
        console.error('EmailJS Error:', err);
      });
  };

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
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone*
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comments"
              >
                Comments
              </label>
              <textarea
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Your Message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            {isSubmitted && (
              <p className="text-green-500 text-xs italic">Message sent successfully!</p>
            )}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        <div>
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <p className="mb-2"><strong>Email:</strong> support@coastalghostwriting.com </p>
            <p className="mb-2">
              <strong>Address:</strong> 539 W. Commerce St #816, Texas, Dallas TX 75208, United States
            </p>

            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.716456878272!2d-96.83587772345908!3d32.77325737366515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99623917f035%3A0xa52bfa2dcb5ca61e!2s539%20W%20Commerce%20St%20%23816%2C%20Dallas%2C%20TX%2075208%2C%20USA!5e0!3m2!1sen!2s!4v1736962103955!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
