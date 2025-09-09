'use client';

import { useState } from 'react';
import { FAQ } from '@/types/faq';

interface FAQItemProps {
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-[#E0E0E0] rounded-lg mb-4 shadow-sm bg-white">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#F5F5F5] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-[#1C2B57] pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-6 h-6 transform transition-transform text-[#003875] ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 border-t border-[#E0E0E0] bg-[#F5F5F5]">
          <div className="pt-4 text-[#333333] leading-relaxed whitespace-pre-line">
            {faq.answer}
          </div>
        </div>
      )}
    </div>
  );
}