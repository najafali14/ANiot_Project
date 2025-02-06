// components/Footer.tsx
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2">
        {/* First Line: Safe Stop and Quick Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Safe Stop */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Safe Stop</h2>
            <p className="text-gray-400 max-w-xs">
              Innovating the future of IoT gadgets to make your life safer and smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/tech-details" className="text-gray-400 hover:text-gray-300 transition">
                  Tech Details
                </Link>
              </li>
              <li>
                <Link href="/cosmos" className="text-gray-400 hover:text-gray-300 transition">
                  Cosmos
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-400 hover:text-gray-300 transition">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-gray-300 transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Line: Follow Us and Legal */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mt-8">
          {/* Follow Us */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-gray-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-gray-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-gray-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-gray-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-gray-300 transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Safe Stop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}