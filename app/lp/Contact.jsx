"use client";
import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, email, phone, message } = formData;
    
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
              message: message,
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border-b-4 border-blue-700 rounded-lg shadow-lg w-full max-w-xl p-8 relative">
        <button
          className="absolute top-5 right-5 p-1 px-3 shadow-xl shadow-black bg-blue-700 text-white  rounded-full hover:text-black duration-300"
          onClick={onClose}
        >
          ✖
        </button>
        {/* Close Button */}

        

        {/* Form */}
        <div className="text-black ">
          <h2 className="text-4xl text-left text-blue-700 font-bold mb-4">
           <span className="text-blue-700">|</span> Activate Coupon Now
          </h2>
          <p className=" text-left mb-6">
            Fill out the form below and we’ll get back to you shortly.
          </p>
          <form className=" text-black space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:space-x-4 space-y-4 md:space-y-0 md:flex-row">
                <input
                type="text"
                id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                placeholder="Your Name"
                className="md:w-[50%] w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
                <input
                type="email"
                id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                placeholder="Your Email"
                className="md:w-[50%] w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <input
              type="tel"
              id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter a brief description about your book"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="3"
              required
            ></textarea>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter" className="text-black text-md">
                To receive our weekly Newsletter/SMS and offers, check here.
              </label>
            </div>
            <p>
                <span className="text-blue-600">Note:</span> By submitting this form, you agree to our <a href="/terms" className="underline text-blue-700">Terms & Conditions.</a>
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-900 duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;