"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service } = formData;
    if (!name || !email || !phone || !service) {
      setError("All fields are required.");
      return;
    }

    setError("");

    emailjs
      .send(
        "service_vcvqcan",
        "template_4ela61n",
        { from_name: name, from_email: email, phone, service },
        "TihDoLxcsdR_sDnwT"
      )
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", service: "" });
      })
      .catch(() => {
        setError("Failed to send your message. Please try again later.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-md">
      <div className="bg-white  shadow-2xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden relative animate-fade-in">
        <div className="md:w-1/3 hidden md:block relative">
          <img src="/modalbg.jpg" className="w-full h-full object-cover" alt="Contact" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-sm text-center mt-2">We are here to assist you. Let us know how we can help!</p>
            <p className="text-sm text-center mt-4">You can also call us at:</p>
            <p className="text-sm text-center mt-">+ (818) 453-1810</p>
          </div>
        </div>
        <div className="w-full md:w-1/1 p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300 transition"
          >
            ✕
          </button>
          <h2 className="text-3xl font-bold text-gray-800 text-left mb-6">Contact Us</h2>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Service Required</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm"
                  placeholder="Enter the service"
                />
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                type="button"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition font-medium shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
