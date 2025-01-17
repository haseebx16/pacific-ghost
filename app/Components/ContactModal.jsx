"use client"

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

    // Validate required fields
    if (!name || !email || !phone || !service) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // EmailJS send email
    emailjs
      .send(
        "service_vcvqcan", // Replace with your EmailJS service ID
        "template_4ela61n", // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          phone,
          service,
        },
        "TihDoLxcsdR_sDnwT" // Replace with your EmailJS user ID
      )
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", service: "" }); // Reset form
      })
      .catch((err) => {
        setError("Failed to send your message. Please try again later.");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Required
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter the service"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md text-black"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;