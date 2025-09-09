'use client';

import { FAQCategory } from '@/types/faq';

interface CategoryFilterProps {
  categories: FAQCategory[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onChange }: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            selectedCategory === ''
              ? 'synchrony-button-primary'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
          }`}
          onClick={() => onChange('')}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              selectedCategory === category.id
                ? 'synchrony-button-primary'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
            }`}
            onClick={() => onChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}