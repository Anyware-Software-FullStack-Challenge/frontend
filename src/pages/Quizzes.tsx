import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Quiz as QuizIcon,
  Timer as TimerIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { fetchQuizzes } from "../features/quizzes/api";
import type { Quiz } from "../features/quizzes/api";
import SharedCard from "../components/SharedCard";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {quizzes.map((q) => (
            <SharedCard
              key={q._id}
              type="quiz"
              title={q.question}
              course={q.course}
              topic={q.topic}
              dueDate={q.dueDate}
              options={q.options}
              onClick={() => {
                // Handle quiz click if needed
                console.log("Quiz clicked:", q.question);
              }}
              buttonText="Start Quiz"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Quizzes;
