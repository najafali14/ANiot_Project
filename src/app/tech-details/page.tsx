// app/tech-details/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function TechDetailsPage() {
  return (
    <div className="min-h-screen bg-[#1b1c29] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Tech Details</h1>
          <p className="text-gray-600">
            Explore the advanced technology behind the Safe Stop Gadget by{' '}
            <span className="font-semibold text-blue-500">ANiot</span>.
          </p>
        </div>

        {/* Product Overview */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Safe Stop Gadget Overview</h2>
          <p className="text-gray-600 mb-6">
            The <span className="font-semibold text-blue-500">Safe Stop Gadget</span> is a
            revolutionary IoT device designed to automatically brake your vehicle before an accident
            occurs. It combines cutting-edge AI, sensors, and real-time data processing to ensure
            your safety on the road.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/safe-stop-gadget.jpg" // Replace with your image path
                alt="Safe Stop Gadget"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ <strong>Automatic Braking System:</strong> Prevents collisions by applying brakes automatically.</li>
                <li>✅ <strong>Real-Time Collision Detection:</strong> Detects potential accidents in real-time.</li>
                <li>✅ <strong>AI-Powered Decision Making:</strong> Uses advanced AI to make split-second decisions.</li>
                <li>✅ <strong>Easy Installation:</strong> Compatible with all vehicles and easy to set up.</li>
                <li>✅ <strong>Durable Design:</strong> Built to withstand harsh driving conditions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specifications List */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">General</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Dimensions:</strong> 2.5in (H) x 1.5in (W)</li>
                <li><strong>Weight:</strong> 50g</li>
                <li><strong>Material:</strong> Durable Polycarbonate</li>
                <li><strong>Color Options:</strong> Black, Blue, Red, Silver</li>
              </ul>
            </div>

            {/* Performance */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Battery Life:</strong> Up to 48 hours</li>
                <li><strong>Charging Time:</strong> 2 hours</li>
                <li><strong>Operating Temperature:</strong> -20°C to 60°C</li>
                <li><strong>Connectivity:</strong> Bluetooth 5.0, Wi-Fi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Experience Safe Stop?</h2>
          <p className="text-gray-600 mb-6">
            Order your <span className="font-semibold text-blue-500">Safe Stop Gadget</span> today and drive with confidence.
          </p>
          <Link
            href="/buy"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Buy Now
          </Link>
        </div>

        {/* About ANiot */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About ANiot</h2>
          <p className="text-gray-600 mb-6">
            <span className="font-semibold text-blue-500">ANiot</span> is a startup dedicated to
            creating innovative IoT solutions that make everyday life safer and smarter. Our mission
            is to deliver cutting-edge technology that empowers users and enhances their experiences.
          </p>
          <p className="text-gray-600">
            Stay tuned for more exciting IoT products from{' '}
            <span className="font-semibold text-blue-500">ANiot</span>!
          </p>
        </div>
      </div>
    </div>
  );
}