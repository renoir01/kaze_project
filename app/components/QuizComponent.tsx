import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizComponentProps {
  questions: Question[];
}

export default function QuizComponent({ questions }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">Quiz Completed!</h2>
          <p className="text-xl mb-4">You scored {score} out of {questions.length}</p>
          <button
            onClick={resetQuiz}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">Question {currentQuestion + 1}</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">{questions[currentQuestion].question}</p>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left p-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}