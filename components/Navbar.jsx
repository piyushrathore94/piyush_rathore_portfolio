// components/Navbar.jsx
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Piyush Rathore</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-lg bg-gray-900">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
// components/Navbar.jsx
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Piyush Rathore</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-lg bg-gray-900">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
