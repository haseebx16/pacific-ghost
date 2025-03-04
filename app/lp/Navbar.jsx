'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const navItems = {
    'SERVICES': ['Memoir', 'Autobiography', 'Fiction', 'Non-Fiction', 'Romance', 'Fantasy Writing', 'Song Writing', 'Business Book', 'Medical Ghostwriting', 'Science Fiction Ghostwriting'],
    'EDITING': ['Book Editing', 'Book Proofreading', 'Book Formatting'],
    'DESIGN': ['Book Illustration', 'Book Cover Design'],
    'PUBLISHING': ['Book Publishing', 'Self-Publishing', 'Amazon Publishing']
  };

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path.toLowerCase());
  };

  const openLiveChat = () => {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.toggle();
    } else {
      console.error("Tawk_API is not loaded yet.");
    }
  };

  return (
    <div className="w-full relative">
      <nav className="bg-transparent absolute top-0 left-0 w-full z-10  border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img src='/logo-white.png' alt='logo' className='cursor-pointer w-72 h-72'/>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 items-center">
              <button
                onClick={openLiveChat}
                className={`text-[18px] bg-yellow-400 text-black rounded-md px-3 py-2 font-medium ${isActive('/') ? 'bg-sky-900 text-white' : 'text-gray-700'}`}
              >
                Live Chat
              </button>
              <a href="tel:8184531810" ><button 
                
                className={`text-[18px] px-3 py-2 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-400 rounded-md text-white font-medium ${isActive('/about') ? 'bg-sky-900 text-white' : 'text-gray-700'}`}
              >
                (818) 453-1810
              </button></a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block text-sm px-3 py-2 ${isActive('/') ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}
            >
              LIVE CHAT
            </Link>
            <Link 
              href="/about" 
              className={`block text-sm px-3 py-2 ${isActive('/about') ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}
            >
              (818) 453-1810
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav