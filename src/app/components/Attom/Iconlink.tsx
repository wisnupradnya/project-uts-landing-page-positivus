"use client";
import { ReactNode } from "react";

interface IconLinkProps {
  children: ReactNode;
  href?: string;
}

export default function IconLink({ children, href = "#" }: IconLinkProps) {
  return (
    <a href={href} className="text-white hover:text-lime-400 cursor-pointer">
      {children}
    </a>
  );
}
