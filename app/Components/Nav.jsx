'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Font } from './font/font'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = {
    'SERVICES': ['Memoir', 'Autobiography', 'Fiction', 'Non-Fiction', 'Romance', 'Fantasy Writing', 'Song Writing', 'Business Book', 'Medical Ghostwriting', 'Science Fiction Ghostwriting'],
    'EDITING': ['Book Editing', 'Book Proofreading', 'Book Formatting'],
    'DESIGN': ['Book Illustration', 'Book Cover Design'],
    'PUBLISHING': ['Book Publishing', 'Self-Publishing', 'Amazon Publishing']
  };

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const isActive = (path) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path.toLowerCase());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(true); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${Font.className} w-full`}>
      {/* Navbar Container */}
      <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Top Bar */}
        <div className="bg-sky-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-4 text-sm">
            <a href="mailto:support@coastalghostwriting.com" className="text-gray-600 hover:text-black">
              support@coastalghostwriting.com
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-sky-100 border-b">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <img src="/logo-coastal.png" alt="logo" className="cursor-pointer w-52 h-52" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className={`text-[15px] px-3 py-2 font-medium ${isActive('/') ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}>HOME</Link>
              <Link href="/about" className={`text-[15px] px-3 py-2 font-medium ${isActive('/about') ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}>ABOUT</Link>
              
              {/* Dropdown Menus */}
              {Object.entries(navItems).map(([key, items]) => (
                <div key={key} className="relative group">
                  <button onClick={() => toggleDropdown(key)} className={`text-[15px] px-3 py-2 font-medium flex items-center ${isActive('/' + key) ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}>
                    {key}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute left-0 mt-0 w-48 bg-white border shadow-sm ${activeDropdown === key ? 'block' : 'hidden'} group-hover:block`}>
                    <div className="py-1">
                      {items.map((item) => (
                        <Link key={item} href={`/${key.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-900 hover:text-white">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/pricing" className={`text-[15px] px-3 py-2 font-medium ${isActive('/pricing') ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}>PRICING</Link>
              <Link href="/contact" className={`text-[15px] px-3 py-2 font-medium ${isActive('/contact') ? 'bg-sky-900 text-white' : 'text-gray-700 hover:text-black'}`}>CONTACT</Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-gray-700 hover:text-black">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block text-sm px-3 py-2 text-gray-700 hover:text-black">HOME</Link>
              <Link href="/about" className="block text-sm px-3 py-2 text-gray-700 hover:text-black">ABOUT</Link>
              
              {/* Mobile Dropdowns */}
              {Object.entries(navItems).map(([key, items]) => (
                <div key={key}>
                  <button onClick={() => toggleDropdown(key)} className="w-full text-left text-sm px-3 py-2 flex items-center justify-between text-gray-700 hover:text-black">
                    {key}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${activeDropdown === key ? 'block' : 'hidden'} pl-4 bg-gray-50`}>
                    {items.map((item) => (
                      <Link key={item} href={`/${key.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-4 py-2 text-sm text-gray-600 hover:text-black">{item}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
