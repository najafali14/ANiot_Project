// components/HeroSection.tsx
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Stop Accidents Before They Happen
        </h1>
        <p className="text-xl mb-8">
          The Safe Stop Gadget: Automatically brakes before an accident.
        </p>
        <Link
          href="/buy"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}