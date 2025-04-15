"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import IconLink from "../Attom/Iconlink";

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-4">
      <IconLink>
        <FaLinkedinIn />
      </IconLink>
      <IconLink>
        <FaFacebookF />
      </IconLink>
      <IconLink>
        <FaTwitter />
      </IconLink>
    </div>
  );
}
