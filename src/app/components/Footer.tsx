"use client";

import { BsStarFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111119] text-white rounded-t-3xl px-6 py-10 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BsStarFill className="text-2xl text-white" />
          <h2 className="text-2xl font-bold">Positivus</h2>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Use Cases
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4">
          <FaLinkedinIn className="text-white hover:text-lime-400 cursor-pointer" />
          <FaFacebookF className="text-white hover:text-lime-400 cursor-pointer" />
          <FaTwitter className="text-white hover:text-lime-400 cursor-pointer" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row gap-60">
        {/* Contact Info */}
        <div>
          <button className="bg-lime-400 text-black font-semibold px-4 py-1 rounded-md mb-4">
            Contact us:
          </button>
          <div className="space-y-1 text-sm text-gray-200">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        {/* Subscribe Box */}
        <div className="bg-[#1F1F2A] p-6 rounded-xl flex flex-col md:flex-row gap-4 items-center w-full md:max-w-md">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white outline-none"
          />
          <button className="bg-lime-400 text-black px-4 rounded-md font-semibold hover:bg-lime-300 transition">
            Subscribe To News
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row  items-center text-sm text-gray-400 gap-4">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
