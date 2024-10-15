import Link from 'next/link';

interface FeaturedCourseProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function FeaturedCourse({ title, description, image, link }: FeaturedCourseProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link href={link} className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
          Learn More
        </Link>
      </div>
    </div>
  );
}