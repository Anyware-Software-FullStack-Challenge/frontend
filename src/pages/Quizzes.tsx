import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Quiz as QuizIcon,
  Timer as TimerIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { fetchQuizzes } from "../features/quizzes/api";
import type { Quiz } from "../features/quizzes/api";

const Quizzes: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuizzes()
      .then((data) => {
        setQuizzes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load quizzes.");
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8 mt-2">
        <div className="flex items-center gap-3 mb-4">
          <QuizIcon className="text-blue-600" fontSize="large" />
          <h1 className="text-3xl font-bold text-zinc-900">Quizzes</h1>
        </div>
        <p className="text-zinc-600">
          Test your knowledge with our interactive quizzes
        </p>
      </div>

      {loading && (
        <div className="text-center text-zinc-500 py-8">Loading...</div>
      )}
      {error && <div className="text-center text-red-500 py-8">{error}</div>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((q) => (
            <motion.div
              key={q._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md border border-zinc-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {q.course} Quiz
                  </h3>
                  <span className="text-xs  bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {q.topic}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <div className="flex items-center gap-1">
                    <TimerIcon fontSize="small" />
                    <span>{q.options.length * 3} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SchoolIcon fontSize="small" />
                    <span>{q.options.length} options</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    Due: {new Date(q.dueDate).toLocaleDateString()}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Start Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Quizzes;
