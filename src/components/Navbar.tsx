// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'react-feather';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black/80 backdrop-blur-sm text-white p-4 fixed w-full top-0 z-50 rounded-b-[100] border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition">
          ANiot
        </Link>

        {/* Desktop Menu (Visible on larger screens) */}
        <div className="md:flex space-x-8">
          <Link href="/tech-details" className="hover:text-gray-300 transition">
            Tech Details
          </Link>
          <Link href="/cosmos" className="hover:text-gray-300 transition">
            Cosmos
          </Link>
          {/* <Link href="/accessories" className="hover:text-gray-300 transition">
            Accessories
          </Link> */}
          <Link href="/support" className="hover:text-gray-300 transition">
            Support
          </Link>
          {/* <Link href="/account" className="hover:text-gray-300 transition">
            Account
          </Link> */}
        </div>

        {/* Mobile Menu Toggle (Visible only on small screens) */}
        <button onClick={toggleMenu} className=" hidden md:hidden hover:text-gray-300 transition">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Visible only on small screens when toggled) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 p-4 rounded-lg border border-gray-700">
          <Link
            href="/tech-details"
            className="block py-2 hover:bg-gray-800 rounded-lg transition"
            onClick={toggleMenu}
          >
            Tech Details
          </Link>
          <Link
            href="/cosmos"
            className="block py-2 hover:bg-gray-800 rounded-lg transition"
            onClick={toggleMenu}
          >
            Cosmos
          </Link>
          {/* <Link
            href="/accessories"
            className="block py-2 hover:bg-gray-800 rounded-lg transition"
            onClick={toggleMenu}
          >
            Accessories
          </Link> */}
          <Link
            href="/support"
            className="block py-2 hover:bg-gray-800 rounded-lg transition"
            onClick={toggleMenu}
          >
            Support
          </Link>
          {/* <Link
            href="/signup"
            className="block py-2 hover:bg-gray-800 rounded-lg transition"
            onClick={toggleMenu}
          >
            Account
          </Link> */}
        </div>
      )}
    </nav>
  );
}