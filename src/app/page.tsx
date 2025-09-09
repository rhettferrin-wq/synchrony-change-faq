'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { faqData, faqCategories } from '@/data/faq-data';
import FAQItem from '@/components/FAQItem';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const selectedCategoryInfo = selectedCategory 
    ? faqCategories.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-[#F4B942]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[#1C2B57] mb-3">
                Synchrony Change Management FAQ
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed">
                Find answers to frequently asked questions about upcoming changes to simplify processes and improve the associate experience.
              </p>
            </div>
            <div className="ml-8 flex-shrink-0">
              <Image
                src="/synchrony-logo.svg"
                alt="Synchrony Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search and Filter */}
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm}
          placeholder="Search questions and answers..."
        />
        
        <CategoryFilter
          categories={faqCategories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />

        {/* Category Description */}
        {selectedCategoryInfo && (
          <div className="mb-8 p-6 bg-[#FFF9E6] border-2 border-[#F4B942] rounded-lg">
            <h2 className="text-xl font-bold text-[#1C2B57] mb-2">
              {selectedCategoryInfo.name}
            </h2>
            <p className="text-[#666666] text-lg">
              {selectedCategoryInfo.description}
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-base font-medium text-[#666666]">
            {filteredFAQs.length === faqData.length 
              ? `Showing all ${filteredFAQs.length} questions`
              : `Showing ${filteredFAQs.length} of ${faqData.length} questions`
            }
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#666666] text-xl font-medium mb-2">
                No questions found matching your search criteria.
              </p>
              <p className="text-[#666666] text-base">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#1C2B57] mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-[#666666] text-lg font-medium">
            Have additional questions? Please reach out to your manager or HR representative.
          </p>
        </div>
      </footer>
    </div>
  );
}
