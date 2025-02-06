// app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ANiot - Innovating Life with Smart IoT Solutions!',
  description: 'ANiot offers innovative IoT gadgets that enhance your lifestyle with smart, connected solutions for home and business. Discover the future of technology today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}