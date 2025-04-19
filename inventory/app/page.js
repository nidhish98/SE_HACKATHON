'use client';
import React from 'react';

const cardData = [
  {
    id: 1,
    image: 'https://dummyimage.com/720x400',
    category: 'Electronics',
    title: 'The Catalyzer',
    description: 'Barcode scanner for warehouse usage with multi-mode integration.',
    views: '1.2K',
    comments: '6',
  },
  {
    id: 2,
    image: 'https://dummyimage.com/721x401',
    category: 'Office Supplies',
    title: 'The 400 Blows',
    description: 'High-speed document shredder with cross-cut blades.',
    views: '900',
    comments: '3',
  },
  {
    id: 3,
    image: 'https://dummyimage.com/722x402',
    category: 'Furniture',
    title: 'Shooting Stars',
    description: 'Adjustable ergonomic chair for all-day comfort.',
    views: '2.1K',
    comments: '12',
  },
];

export default function HomePage() {
  return (
    <main className="text-gray-600 body-font">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-6">Welcome to Doraemon</h1>
          <p className="text-lg text-gray-700">
            Track inventory, manage reports, and get alerts — all in one place.
          </p>
        </div>
      </section>

      {/* Inventory Preview Cards */}
      <section className="container px-5 py-12 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Recently Added Inventory
        </h2>
        <div className="flex flex-wrap -m-4">
          {cardData.map((item) => (
            <div key={item.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {item.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {item.views}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {item.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
