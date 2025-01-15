import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-800  mt-12 md:mt-0 text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            {/* <h2 className="text-xl font-bold text-white mb-4">Coastal Ghostwriting</h2>
             */}
             <img src="/logo-white.png" alt="logo" className="w-72 h-72 cursor-pointer"/>
            {/* <p>
              The services provided by Coastal Ghostwriting become clients' property once
              delivered. Coastal Ghostwriting will not hold any ownership rights once your work
              is successfully accepted by a publishing house.
            </p> */}
            
          </div>

          {/* Quick Links */}
          <div className="w-full flex flex-col justify-center items-start md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="about" className="hover:text-white">About</a></li>
              <li><a href="pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/6 flex flex-col justify-center items-start mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="services/memoir" className="hover:text-white">Memoir</a></li>
              <li><a href="services/autobiography" className="hover:text-white">Autobiography</a></li>
              <li><a href="services/fiction" className="hover:text-white">Fiction</a></li>
              <li><a href="services/non-fiction" className="hover:text-white">Nonfiction</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full flex flex-col justify-center md:mt-8 items-start md:w-1/3">
            <h3 className="text-lg font-semibold text-white ">Contact Info</h3>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <FiPhone className="text-gray-400" />
                <p>+1-469-476-4994</p>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="text-gray-400" />
                <p>support@coastalghostwriting.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <HiOutlineLocationMarker className="text-gray-400" />
                <p>539 W. Commerce St #816, Dallas, TX 75208, United States</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-wrap justify-between items-center">
          <p>© 2025 Coastal Ghostwriting. All rights reserved Coastal Ghostwriting ➤ #1 Ghostwriting Services</p>
          <p>Disclaimer: Empowering Excellence in Partnership with Puremed Essentials LLC 16 surrey lane belle mead NJ 08502</p>
          <div className="space-x-4">
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
