import React from "react";
import { motion } from "framer-motion";
import {
  Announcement as AnnouncementIcon,
  Quiz as QuizIcon,
  Timer as TimerIcon,
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

interface SharedCardProps {
  type: "announcement" | "quiz";
  title: string;
  content?: string;
  author?: string;
  role?: string;
  course?: string;
  topic?: string;
  dueDate?: string;
  options?: string[];
  createdAt?: string;
  onClick?: () => void;
  buttonText?: string;
}

const SharedCard: React.FC<SharedCardProps> = ({
  type,
  title,
  content,
  author,
  role,
  course,
  topic,
  dueDate,
  options,
  createdAt,
  onClick,
  buttonText,
}) => {
  const getRoleColor = (role: string) => {
    const colors = {
      math: "bg-blue-100 text-blue-700 border-blue-200",
      physics: "bg-purple-100 text-purple-700 border-purple-200",
      management: "bg-green-100 text-green-700 border-green-200",
      events: "bg-orange-100 text-orange-700 border-orange-200",
      other: "bg-gray-100 text-gray-700 border-gray-200",
    };
    return colors[role as keyof typeof colors] || colors.other;
  };

  const getTypeIcon = () => {
    return type === "announcement" ? (
      <AnnouncementIcon className="text-blue-600" />
    ) : (
      <QuizIcon className="text-purple-600" />
    );
  };

  const getTypeGradient = () => {
    return type === "announcement"
      ? "from-blue-50 to-blue-100/30"
      : "from-purple-50 to-purple-100/30";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        group relative bg-white rounded-xl shadow-lg border border-gray-100 
        hover:shadow-xl transition-all duration-300 overflow-hidden
        hover:scale-[1.02] 
      `}
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getTypeGradient()} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors duration-300">
              {getTypeIcon()}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {type === "announcement" ? title : `${course} Quiz`}
              </h3>
              {type === "quiz" && (
                <p className="text-sm text-gray-600 mt-1">{title}</p>
              )}
            </div>
          </div>

          {/* Badge */}
          <span
            className={`
            text-xs px-3 py-1 rounded-full border font-medium
            ${getRoleColor(role || topic || "other")}
            transition-all duration-300 group-hover:scale-105
          `}
          >
            {type === "announcement"
              ? (role || "Other").charAt(0).toUpperCase() +
                (role || "Other").slice(1)
              : topic}
          </span>
        </div>

        {type === "announcement" && content && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {content}
          </p>
        )}

        {type === "quiz" && options && (
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <TimerIcon fontSize="small" className="text-orange-500" />
                <span>{options.length * 3} min</span>
              </div>
              <div className="flex items-center gap-1">
                <SchoolIcon fontSize="small" className="text-blue-500" />
                <span>{options.length} questions</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {type === "announcement" && author && (
              <div className="flex items-center gap-1">
                <PersonIcon fontSize="small" />
                <span>{author}</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <CalendarIcon fontSize="small" />
              <span>
                {type === "announcement"
                  ? new Date(createdAt || "").toLocaleDateString()
                  : `Due: ${new Date(dueDate || "").toLocaleDateString()}`}
              </span>
            </div>
          </div>

          {type === "quiz" && (
            <button
              className="
              px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 
              text-white text-sm font-medium rounded-lg 
              hover:from-purple-700 hover:to-purple-800 
              transition-all duration-300 transform hover:scale-105
              shadow-md hover:shadow-lg
            "
            >
              {buttonText || "Start Quiz"}
            </button>
          )}
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default SharedCard;
