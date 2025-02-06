// components/FeatureSection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function FeatureSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why ANiot?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg">
            <Image
              src="/images/feature-1.jpg"
              alt="Automatic Braking"
              // className="w-full h-full object-cover rounded-lg mb-4"
              className='rounded-[50]'
              height={1000}
              width={1200}
            />
            <h3 className="text-2xl font-semibold mb-4">Innovative IoT Solutions</h3>
            <p>Offering cutting-edge technology that enhances your daily life.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg">
            <Image
              src="/images/feature-2.jpg"
              alt="Customizable"
              className='rounded-[50]'
              height={1000}
              width={1200}
              // className="w-full h-full object-cover rounded-lg mb-4 mt-20"
            />
            <h3 className="text-2xl font-semibold mb-4">Quality Products</h3>
            <p>Carefully selected, high-quality gadgets designed for performance and durability.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg">
            <Image
              src="/images/feature-3.jpg"
              alt="Easy to Install"
              className='rounded-[50]'
              height={1000}
              width={1200}
              // className="w-full h-full object-cover rounded-lg mb-4 mt-20"
            />
            <h3 className="text-2xl font-semibold mb-4">Smart Connectivity</h3>
            <p>Seamlessly integrate devices into your home or business for increased efficiency.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}