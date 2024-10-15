import React from 'react';

interface CourseProgressProps {
  totalLessons: number;
  completedLessons: number;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ totalLessons, completedLessons }) => {
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-green-700 dark:text-green-500">Course Progress</span>
        <span className="text-sm font-medium text-green-700 dark:text-green-500">{completedLessons}/{totalLessons}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default CourseProgress;