'use client';
import Image from 'next/image';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4 z-50 relative">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="Auto Service Logo" width={80} height={50} />
        </Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="flex items-center"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 z-50">
                <li><Link href="/services/engine" className="block px-4 py-2 hover:bg-gray-100">Engine</Link></li>
                <li><Link href="/services/suspension" className="block px-4 py-2 hover:bg-gray-100">Suspension</Link></li>
                <li><Link href="/services/steering" className="block px-4 py-2 hover:bg-gray-100">Steering</Link></li>
                <li><Link href="/services/brakes" className="block px-4 py-2 hover:bg-gray-100">Brakes</Link></li>
                <li><Link href="/services/electrical" className="block px-4 py-2 hover:bg-gray-100">Electrical System</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
