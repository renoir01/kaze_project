import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoEnvironment - The Green Academy',
  description: 'Accessible online learning platform for environmental sustainability',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-green-500 text-white p-2 z-50">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="focus:outline-none" tabIndex={-1}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}