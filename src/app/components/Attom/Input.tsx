"use client";

interface InputProps {
  placeholder?: string;
  type?: string;
}

export default function Input({ placeholder = "", type = "text" }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white outline-none"
    />
  );
}
