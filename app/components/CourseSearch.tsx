import React, { useState } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
}

interface CourseSearchProps {
  courses: Course[];
}

const CourseSearch: React.FC<CourseSearchProps> = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(term.toLowerCase()) ||
      course.description.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredCourses);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      {searchTerm && (
        <ul className="mt-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
          {searchResults.map(course => (
            <li key={course.id} className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-500">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
            </li>
          ))}
          {searchResults.length === 0 && (
            <li className="p-4 text-gray-600 dark:text-gray-400">No courses found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CourseSearch;