import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from './components/NewsletterSignup';
import FeaturedCourse from './components/FeaturedCourse';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <header className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">EcoEnvironment</h1>
        <p className="text-xl mt-2 dark:text-gray-300">Empowering Learners with Accessible Education on Environmental Sustainability</p>
      </header>

      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-green-700 dark:text-green-500">Featured Course</h2>
        <FeaturedCourse
          title="Climate Change: Understanding the Crisis"
          description="Dive deep into the science behind climate change and learn about its global impact."
          image="/images/climate-change.jpg"
          link="/courses/climate-change"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">For Students</h2>
          <p className="dark:text-gray-300">Explore interactive courses on climate change, conservation, and sustainable living.</p>
          <Link href="/courses" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300">View Courses</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">For Educators</h2>
          <p className="dark:text-gray-300">Access resources to integrate sustainability into your curriculum.</p>
          <Link href="/about" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300">Learn More</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">For Professionals</h2>
          <p className="dark:text-gray-300">Enhance your knowledge and skills in environmental sustainability.</p>
          <Link href="/courses" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300">Explore Programs</Link>
        </div>
      </section>

      <section className="mt-12 w-full max-w-2xl">
        <NewsletterSignup />
      </section>

      <footer className="mt-12 text-center dark:text-gray-300">
        <p>&copy; 2023 The Green Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}