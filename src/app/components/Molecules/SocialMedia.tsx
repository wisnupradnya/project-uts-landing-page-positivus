import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../Attom/SocialIcon";

export default function SocialMedia() {
  return (
    <div className="flex items-center space-x-4">
      <SocialIcon Icon={FaLinkedinIn} />
      <SocialIcon Icon={FaFacebookF} />
      <SocialIcon Icon={FaTwitter} />
    </div>
  );
}
