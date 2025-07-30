import React from "react";
import footerLogo from "../assets/footer-logo.png";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 ">
      {/* Left side */}
      <div className="max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-30" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#home " className="hover:text-yellow-500"></a>Home
            </li>
            <li>
              <a href="#services " className=""></a>Services
            </li>
            <li>
              <a href="#contact " className=""></a>Contact
            </li>
            <li>
              <a href="#about " className=""></a>About Us
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 w-full ">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news, and
            offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your email"
              className="bg-white w-full px-4 py-4 rounded-l-md text-black"
            />
            <button className="bg-amber-500 px-6 py-2 rounded-r-md hover:bg-yellow-900  cursor-pointer duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* bottom section of left*/}
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-700 pt-6">
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:text-amber-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-amber-400">
              Terms of Services
            </a>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
