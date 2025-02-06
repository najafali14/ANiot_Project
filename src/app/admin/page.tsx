'use client';
import { useState, useEffect } from 'react';
import { Order } from '@/lib/types';

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch('/api/orders');
      const data: Order[] = await response.json();
      setOrders(data);
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>

      <div className="bg-gray-800 p-6 rounded-lg">
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Address</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.name}</td>
                  <td className="p-2">{order.email}</td>
                  <td className="p-2">{order.phone}</td>
                  <td className="p-2">{order.address}</td>
                  <td className="p-2">{new Date(order.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
