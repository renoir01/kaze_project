import React from 'react';
import CourseProgress from '../components/CourseProgress';

const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    enrolledCourses: [
      { id: '1', title: 'Climate Change 101', totalLessons: 10, completedLessons: 7 },
      { id: '2', title: 'Sustainable Living', totalLessons: 8, completedLessons: 3 },
      { id: '3', title: 'Conservation Techniques', totalLessons: 12, completedLessons: 12 },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-8">User Profile</h1>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">{user.name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{user.email}</p>
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-500">Enrolled Courses</h3>
        {user.enrolledCourses.map(course => (
          <div key={course.id} className="mb-6">
            <h4 className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">{course.title}</h4>
            <CourseProgress totalLessons={course.totalLessons} completedLessons={course.completedLessons} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserProfile;