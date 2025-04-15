"use client";

import ContactInfo from "../Molecules/ContactInfo";
import Logo from "../Molecules/Logo";
import NavigationLinks from "../Molecules/NavigationLinks";
import SocialMedia from "../Molecules/SocialMedia";
import SubscribeBox from "../Molecules/SubscribeBox";

export default function Footer() {
  return (
    <footer className="bg-[#111119] text-white rounded-t-3xl px-6 py-10 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10">
        <Logo />
        <NavigationLinks />
        <SocialMedia />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row gap-60">
        <ContactInfo />
        <SubscribeBox />
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center text-sm text-gray-400 gap-4">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
