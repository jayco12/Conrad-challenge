'use client';

import React from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#features', label: 'Features' },
  { href: '#team', label: 'Meet the Team' },
  { href: '#contact', label: 'Contact' },
];


export default function Navbar() {
  return (
    <div className="w-full bg-gray-900 text-white">
      <nav className="flex justify-between items-center p-6">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold font-heading text-primary">
          Urbanveil
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-8 mx-auto">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden flex items-center">
          <label htmlFor="menu-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <div className="xl:hidden flex flex-col items-center space-y-4 p-4 bg-gray-800">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:underline">
            {item.label}
          </a>
        ))}
      </div>
      <style jsx>{`
        #menu-toggle:checked ~ #mobile-menu {
          display: flex;
        }
      `}</style>
    </div>
  );
}
