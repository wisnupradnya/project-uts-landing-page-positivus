// src/app/components/AccordionItem.tsx
"use client";
import { useState } from "react";

type AccordionItemProps = {
  number: string;
  title: string;
  content: string;
};

export default function AccordionItem({
  number,
  title,
  content,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-black px-6 py-4 mb-4 rounded-2xl shadow-sm transition-all duration-300 ${
        isOpen ? "bg-lime-300" : "bg-white"
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="text-3xl">{number}</span> {title}
        </h3>
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <p className="mt-4 text-sm text-gray-800">{content}</p>}
    </div>
  );
}
