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

  return (
    <div className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-end items-center space-x-4 text-sm">
            <a href="tel:1-469-476-4994" className="text-gray-600 hover:text-black">
              1-469-476-4994
            </a>
            <span className="text-gray-400">|</span>
            <a href="mailto:info@pacificghostwriting.com" className="text-gray-600 hover:text-black">
              info@pacificghostwriting.com
            </a>
            <Link href="/login" className="bg-black text-white px-4 py-1 text-sm">
              LOGIN
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Pacific Ghost Writing"
                  width={180}
                  height={40}
                  className="cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/" 
                className={`text-[13px] px-3 py-2 font-medium ${isActive('/') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className={`text-[13px] px-3 py-2 font-medium ${isActive('/about') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
              >
                ABOUT
              </Link>
              
              {/* Dropdown Menus */}
              {Object.entries(navItems).map(([key, items]) => (
                <div key={key} className="relative z-10 group">
                  <button
                    className={`text-[13px] px-3 py-2 flex items-center font-medium ${isActive('/' + key) ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
                    onClick={() => toggleDropdown(key)}
                  >
                    {key}
                    <svg className={`w-3 h-3 ml-1 ${isActive('/' + key) ? 'text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute left-0 mt-0 w-48 bg-white border shadow-sm ${activeDropdown === key ? 'block' : 'hidden'} group-hover:block`}>
                    <div className="py-1">
                      {items.map((item) => (
                        <Link
                          key={item}
                          href={`/${key.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link 
                href="/pricing" 
                className={`text-[13px] px-3 py-2 font-medium ${isActive('/pricing') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
              >
                PRICING
              </Link>
              <Link 
                href="/contact" 
                className={`text-[13px] px-3 py-2 font-medium ${isActive('/contact') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
              >
                CONTACT
              </Link>
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
              className={`block text-sm px-3 py-2 ${isActive('/') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className={`block text-sm px-3 py-2 ${isActive('/about') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
            >
              ABOUT
            </Link>
            
            {/* Mobile Dropdowns */}
            {Object.entries(navItems).map(([key, items]) => (
              <div key={key}>
                <button
                  className={`w-full text-left text-sm px-3 py-2 flex items-center justify-between ${isActive('/' + key) ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
                  onClick={() => toggleDropdown(key)}
                >
                  {key}
                  <svg className={`w-3 h-3 ${isActive('/' + key) ? 'text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`${activeDropdown === key ? 'block' : 'hidden'} pl-4 bg-gray-50`}>
                  {items.map((item) => (
                    <Link
                      key={item}
                      href={`/${key.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-black"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link 
              href="/pricing" 
              className={`block text-sm px-3 py-2 ${isActive('/pricing') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
            >
              PRICING
            </Link>
            <Link 
              href="/contact" 
              className={`block text-sm px-3 py-2 ${isActive('/contact') ? 'bg-black text-white' : 'text-gray-700 hover:text-black'}`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav