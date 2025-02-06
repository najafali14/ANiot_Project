import { NextResponse } from 'next/server';
import db from '@/lib/database';
import { Order } from '@/lib/types';

interface OrderRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
}

// Handle POST request (store order)
export async function POST(req: Request) {
  try {
    const { name, email, phone, address }: OrderRequest = await req.json();

    if (!name || !email || !phone || !address) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const stmt = db.prepare('INSERT INTO orders (name, email, phone, address) VALUES (?, ?, ?, ?)');
    stmt.run(name, email, phone, address);

    return NextResponse.json({ message: 'Order placed successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

// Handle GET request (fetch orders)
export async function GET() {
  try {
    const orders: Order[] = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
