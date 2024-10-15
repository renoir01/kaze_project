import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="bg-green-600 dark:bg-green-800 p-4 transition-colors duration-300" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">EcoEnvironment</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-green-200 transition-colors duration-300">Home</Link></li>
          <li><Link href="/courses" className="text-white hover:text-green-200 transition-colors duration-300">Courses</Link></li>
          <li><Link href="/about" className="text-white hover:text-green-200 transition-colors duration-300">About</Link></li>
          <li><Link href="/contact" className="text-white hover:text-green-200 transition-colors duration-300">Contact</Link></li>
          <li><Link href="/profile" className="text-white hover:text-green-200 transition-colors duration-300">Profile</Link></li>
          <li>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:text-green-200 transition-colors duration-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}