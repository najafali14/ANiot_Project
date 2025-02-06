// app/(main)/cosmos/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CosmosPage() {
  const router = useRouter();
  const [idea, setIdea] = useState({
    name: '',
    email: '',
    phone: '',
    selectedIdea: '', // Predefined idea selected from dropdown
    customDescription: '', // Custom idea description
  });

  const predefinedIdeas = [
    'Smart Home Security System',
    'Wearable Health Monitor',
    'Automated Plant Watering System',
    'Smart Door Lock',
    'GPS Tracking Device',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setIdea((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.selectedIdea && !idea.customDescription) {
      alert('Please select a predefined idea or describe your custom idea.');
      return;
    }
    alert('Your idea has been submitted! We will contact you soon.');
    router.push('/'); // Redirect to homepage after submission
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Customize Your IoT Gadget</h1>
        <p className="text-lg mb-8">
          Choose from our predefined IoT gadget ideas or describe your own custom idea. We'll build
          it for you!
        </p>

        {/* Custom Product Idea Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Submit Your Idea</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={idea.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={idea.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={idea.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>

          {/* Predefined Ideas Dropdown */}
          <div className="mb-6">
            <label htmlFor="selectedIdea" className="block text-lg mb-2">
              Select a Predefined Idea
            </label>
            <select
              id="selectedIdea"
              name="selectedIdea"
              value={idea.selectedIdea}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
            >
              <option value="">-- Select an idea --</option>
              {predefinedIdeas.map((idea, index) => (
                <option key={index} value={idea}>
                  {idea}
                </option>
              ))}
            </select>
          </div>

          {/* Custom Idea Description */}
          <div className="mb-6">
            <label htmlFor="customDescription" className="block text-lg mb-2">
              Or Describe Your Custom IoT Gadget
            </label>
            <textarea
              id="customDescription"
              name="customDescription"
              value={idea.customDescription}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              rows={5}
              placeholder="Describe your gadget idea, including features, size, color, and any other requirements."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
}