'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BuyProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Order placed successfully! You will pay upon delivery.');
      router.push('/'); // Redirect to homepage
    } else {
      alert('Error placing order. Try again!');
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Buy Safe Stop Gadget</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
          <p className="text-lg mb-2"><strong>Name:</strong> Safe Stop Gadget</p>
          <p className="text-lg mb-2"><strong>Price:</strong> $199.99</p>
          <p className="text-lg"><strong>Description:</strong> Automatically brakes before an accident.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 text-white" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 text-white" required />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 text-white" required />
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-lg mb-2">Shipping Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 text-white" required />
          </div>

          <div className="mb-6 p-4 bg-gray-700 rounded-lg">
            <p className="text-lg"><strong>Payment Method:</strong> Cash on Delivery (COD)</p>
            <p className="text-sm text-gray-300">You will pay for the product upon delivery.</p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Place Order</button>
        </form>
      </div>
    </div>
  );
}
