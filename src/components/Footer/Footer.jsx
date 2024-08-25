import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand and Description */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-xl font-bold">MovieFlix</h2>
            <p className="text-sm">Your go-to place for movies and series.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="hover:text-gray-400">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-between space-x-4 text-sm text-gray-400 mt-4">
          <a href="/audio-description" className="hover:text-white">Audio Description</a>
          <a href="/help-center" className="hover:text-white">Help Center</a>
          <a href="/gift-cards" className="hover:text-white">Gift Cards</a>
          <a href="/terms-of-use" className="hover:text-white">Terms of Use</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/cookies-preferences" className="hover:text-white">Cookies Preferences</a>
          <a href="/contact-us" className="hover:text-white">Contact Us</a>
          <a href="/corporate-information" className="hover:text-white">Corporate Information</a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MovieFlix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
