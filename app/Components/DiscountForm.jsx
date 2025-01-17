"use client";

import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const DiscountForm = ({ isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, phone, message } = formData

    if (!name || !email || !phone || !message) {
      setError('All fields are required.')
      return
    }

    setError('')

    emailjs
      .send(
        'service_vcvqcan', // Replace with your EmailJS service ID
        'template_4ela61n', // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          phone,
          message,
        },
        'TihDoLxcsdR_sDnwT' // Replace with your EmailJS user ID
      )
      .then(() => {
        setSuccessMessage('Your message has been sent successfully!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      })
      .catch((err) => {
        setError('Failed to send your message. Please try again later.')
        console.error('EmailJS Error:', err)
      })
  }

  return (
    <div className="p-6 bg-black text-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Activate Your Coupon</h2>
      <p className="mb-6 text-sm">
        Get started before it's too late! It’s a limited-time offer, so hurry up!
      </p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No. *"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter a brief description about your book"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-600 transition"
        >
          SUBMIT YOUR REQUEST
        </button>
      </form>
    </div>
  )
}

export default DiscountForm