import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, address } = await req.json();

    const stmt = db.prepare(`
      INSERT INTO orders (name, email, phone, address)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run(name, email, phone, address);

    return NextResponse.json({ message: 'Order placed successfully' }, { status: 201 });
  } catch (_) { // Ignoring the unused error variable
    return NextResponse.json({ error: 'Failed to place order' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const orders = db.prepare('SELECT * FROM orders ORDER BY createdAt DESC').all();
    return NextResponse.json(orders);
  } catch (_) { // Ignoring the unused error variable
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}
