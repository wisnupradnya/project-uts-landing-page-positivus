"use client";

import { useState } from "react";

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("sayHi");

  return (
    <div className="w-full min-h-screen px-5 md:px-20 py-10">
      <div className="bg-[#F3F3F3] rounded-3xl  grid md:grid-cols-2 gap-8 items-center w-full">
        {/* LEFT: Form */}
        <div className="p-8">
          <div className="flex space-x-4 mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="sayHi"
                checked={selectedOption === "sayHi"}
                onChange={() => setSelectedOption("sayHi")}
                className="accent-lime-400"
              />
              <span className="font-medium">Say Hi</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="quote"
                checked={selectedOption === "quote"}
                onChange={() => setSelectedOption("quote")}
                className="accent-lime-400"
              />
              <span className="font-medium">Get a Quote</span>
            </label>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-lime-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-lime-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#131313] text-white py-3 rounded-lg hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-end items-center">
          <img
            src="/Mask2.png"
            alt="Decoration"
            width={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
