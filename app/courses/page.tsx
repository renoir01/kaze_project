import QuizComponent from '../components/QuizComponent';
import CourseSearch from '../components/CourseSearch';

const sampleQuestions = [
  {
    question: "What is the main cause of global warming?",
    options: ["Deforestation", "Greenhouse gas emissions", "Volcanic eruptions", "Solar radiation"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is a renewable energy source?",
    options: ["Coal", "Natural gas", "Solar power", "Oil"],
    correctAnswer: 2
  },
  {
    question: "What is the primary goal of conservation biology?",
    options: ["Increase biodiversity", "Protect endangered species", "Restore damaged ecosystems", "All of the above"],
    correctAnswer: 3
  }
];

const courses = [
  { id: '1', title: 'Climate Change 101', description: 'Learn the basics of climate change and its impact on our planet.' },
  { id: '2', title: 'Sustainable Living', description: 'Discover practical ways to reduce your environmental footprint.' },
  { id: '3', title: 'Conservation Techniques', description: 'Explore methods for preserving biodiversity and natural habitats.' },
  { id: '4', title: 'Green Energy Solutions', description: 'Understand renewable energy sources and their implementation.' },
];

export default function Courses() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-8">Our Courses</h1>
      <CourseSearch courses={courses} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
        {courses.map(course => (
          <div key={course.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">{course.title}</h2>
            <p className="dark:text-gray-300 mb-4">{course.description}</p>
            <a href="#" className="text-green-600 dark:text-green-400 hover:underline">Start Course</a>
          </div>
        ))}
      </div>
      <section className="w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-green-700 dark:text-green-500">Test Your Knowledge</h2>
        <QuizComponent questions={sampleQuestions} />
      </section>
    </main>
  );
}