import { IconType } from "react-icons";

interface SocialIconProps {
  Icon: IconType;
}

export default function SocialIcon({ Icon }: SocialIconProps) {
  return <Icon className="text-white hover:text-lime-400 cursor-pointer" />;
}
