import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-12 text-gray-400 text-sm py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-4">Coastal Ghostwriting</h2>
            <p>
              The services provided by Coastal Ghostwriting become clients' property once
              delivered. Coastal Ghostwriting will not hold any ownership rights once your work
              is successfully accepted by a publishing house.
            </p>
            <div className="flex mt-4 space-x-3">
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

          {/* Quick Links */}
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="about" className="hover:text-white">About</a></li>
              <li><a href="pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="services/memoir" className="hover:text-white">Memoir</a></li>
              <li><a href="services/autobiography" className="hover:text-white">Autobiography</a></li>
              <li><a href="services/fiction" className="hover:text-white">Fiction</a></li>
              <li><a href="services/non-fiction" className="hover:text-white">Nonfiction</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Self-Publishing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Book Cover Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Editing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Proofreading</a>
              </li>
            </ul>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <FiPhone className="text-gray-400" />
                <p>+1-469-476-4994</p>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="text-gray-400" />
                <p>support@pacificghostwriting.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <HiOutlineLocationMarker className="text-gray-400" />
                <p>800 Wilshire Blvd Suite 501, Los Angeles, CA 90017, United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-wrap justify-between items-center">
          <p>© 2025 Coastal Ghostwriting. All rights reserved Coastal Ghostwriting ➤ #1 Ghostwriting Services</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
