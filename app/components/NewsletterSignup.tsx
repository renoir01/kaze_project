import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    setEmail('');
    alert('Thank you for signing up!');
  };

  return (
    <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}