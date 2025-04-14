import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = "",
}) => {
  const baseClasses =
    "bg-[#B9FF66] font-bold text-2xl text-black px-5 py-3 rounded-lg";

  return <h1 className={`${baseClasses} ${className}`}>{children}</h1>;
};

export default SectionHeading;
