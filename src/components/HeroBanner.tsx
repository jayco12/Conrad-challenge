'use client';

import React from 'react';

export default function HeroBanner() {
  return (
    <div className="relative bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
  <iframe
    className="absolute inset-0 w-full h-full object-cover opacity-60"
    src="https://www.youtube.com/embed/Af97oE1qktE?autoplay=1&loop=1&playlist=Af97oE1qktE&mute=1"
    title="UrbanVeil Vertical Forest"
    frameBorder="0"
    allow="autoplay; loop"
    allowFullScreen
  />
</div>


      {/* Overlay content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-5xl font-bold mb-4">
          Transforming Cities, One Vertical Forest at a Time
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Experience the beauty and innovation of UrbanVeil – where sustainability meets design.
        </p>
        <a
          href="#about"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-900"></div>
    </div>
  );
}
